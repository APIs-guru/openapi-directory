import os
import asyncio
import subprocess

# Define the languages and output directories for each.
languages = {
    "python": "python-client",
}

async def worker(queue):
    while True:
        openapi_file, output_dir, language = await queue.get()
        if openapi_file is None:
            break
        
        command = [
            "openapi-generator", "generate",
            "-i", openapi_file,
            "-g", language,
            "-o", output_dir
        ]
        process = await asyncio.create_subprocess_exec(
            *command,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        stdout, stderr = await process.communicate()

        if process.returncode == 0:
            print(f"Generated {language} client code for {openapi_file}")
        else:
            print(f"Error generating {language} client code for {openapi_file}\n{stderr.decode()}")
        
        queue.task_done()

async def traverse_and_generate_clients(root_dir):
    queue = asyncio.Queue()
    
    # Create 50 workers (for concurrency)
    workers = [asyncio.create_task(worker(queue)) for _ in range(30)]
    
    # Queue up the tasks
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                openapi_file = os.path.join(subdir, file)
                for lang, out_dir in languages.items():
                    output_dir = os.path.join(subdir, out_dir)
                    print(f"Queueing {lang} client code generation for {openapi_file}")
                    await queue.put((openapi_file, output_dir, lang))
    
    # Wait until all tasks are done
    await queue.join()
    
    # Stop workers
    for _ in range(50):
        await queue.put((None, None, None))
    
    await asyncio.gather(*workers)

if __name__ == "__main__":
    root_directory = "/Users/seanbaker/Documents/GitHub/openapi-directory/APIs"
    asyncio.run(traverse_and_generate_clients(root_directory))