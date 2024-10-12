import os
import asyncio
import subprocess

# Define the languages and output directories for each.
languages = {
    "python": "python-client",
}

async def generate_client_code(semaphore, openapi_file, output_dir, language):
    async with semaphore:
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

async def traverse_and_generate_clients(root_dir):
    semaphore = asyncio.Semaphore(10)  # Limit to 10 concurrent tasks
    tasks = []
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                openapi_file = os.path.join(subdir, file)
                for lang, out_dir in languages.items():
                    output_dir = os.path.join(subdir, out_dir)
                    print(f"Queueing {lang} client code generation for {openapi_file}")
                    task = generate_client_code(semaphore, openapi_file, output_dir, lang)
                    tasks.append(task)

    await asyncio.gather(*tasks)

if __name__ == "__main__":
    root_directory = "/Users/seanbaker/Documents/GitHub/openapi-directory/APIs"
    asyncio.run(traverse_and_generate_clients(root_directory))