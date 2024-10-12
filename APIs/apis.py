import os
import asyncio
import subprocess
from concurrent.futures import ProcessPoolExecutor

# Define the languages and output directories for each.
languages = {
    "python": "python-client",
}

def generate_client_code(openapi_file, output_dir, language):
    # Normal function, not async anymore
    command = [
        "openapi-generator", "generate",
        "-i", openapi_file,
        "-g", language,
        "-o", output_dir
    ]
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    if result.returncode == 0:
        print(f"Generated {language} client code for {openapi_file}")
    else:
        print(f"Error generating {language} client code for {openapi_file}\n{result.stderr.decode()}")

async def worker(queue, executor):
    while True:
        openapi_file, output_dir, language = await queue.get()
        if openapi_file is None:
            break
        
        # Running the blocking task in the ProcessPoolExecutor
        await asyncio.get_event_loop().run_in_executor(executor, generate_client_code, openapi_file, output_dir, language)
        queue.task_done()

async def traverse_and_generate_clients(root_dir):
    queue = asyncio.Queue()
    # Set the number of concurrent workers
    max_workers = 50
    executor = ProcessPoolExecutor(max_workers=max_workers)
    
    # Create worker tasks
    workers = [asyncio.create_task(worker(queue, executor)) for _ in range(max_workers)]
    
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                openapi_file = os.path.join(subdir, file)
                for lang, out_dir in languages.items():
                    output_dir = os.path.join(subdir, out_dir)
                    await queue.put((openapi_file, output_dir, lang))
    
    # Wait for the queue to be processed
    await queue.join()
    
    # Signal the workers to stop
    for _ in range(max_workers):
        await queue.put((None, None, None))
    
    # Wait for all workers to finish
    await asyncio.gather(*workers)
    executor.shutdown()

if __name__ == "__main__":
    root_directory = "/Users/seanbaker/Documents/GitHub/openapi-directory/APIs/"
    asyncio.run(traverse_and_generate_clients(root_directory))