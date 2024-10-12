import os
import subprocess

# Define the languages and output directories for each.
languages = {
    "python": "python-client",
    "python-flask": "python-flask-client",
    "java": "java-client",
    "cpp-qt-client": "cpp-qt-client",
    "javascript": "javascript-client",
    "python-aiohttp": "python-aiohttp-client"
}

def generate_client_code(openapi_file, output_dir, language):
    command = [
        "openapi-generator", "generate",
        "-i", openapi_file,
        "-g", language,
        "-o", output_dir
    ]
    subprocess.run(command, check=True)

def traverse_and_generate_clients(root_dir):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                openapi_file = os.path.join(subdir, file)
                for lang, out_dir in languages.items():
                    output_dir = os.path.join(subdir, out_dir)
                    print(f"Generating {lang} client code for {openapi_file}")
                    generate_client_code(openapi_file, output_dir, lang)

if __name__ == "__main__":
    root_directory = "/Users/seanbaker/Documents/GitHub/openapi-directory/APIs"
    traverse_and_generate_clients(root_directory)