import os
import random
import subprocess
from datetime import datetime, timedelta

# Function to generate a random commit date within the last year
def random_commit_date():
    days_ago = random.randint(1, 365)  # Random number of days within the past year
    random_date = (datetime.now() - timedelta(days=days_ago)).strftime("%Y-%m-%dT%H:%M:%S")
    return random_date

# Function to check if a branch exists
def branch_exists(branch_name):
    result = subprocess.run(
        ["git", "rev-parse", "--verify", branch_name],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    return result.returncode == 0

# Function to create a new branch or switch to an existing branch
def git_create_branch_and_commit(language, directories):
    branch_name = f"{language}-client-branch"
    
    # Check if the branch already exists
    if branch_exists(branch_name):
        # If branch exists, switch to it
        subprocess.run(["git", "checkout", branch_name], check=True)
        print(f"Switched to existing branch {branch_name}.")
    else:
        # If branch does not exist, create a new branch
        subprocess.run(["git", "checkout", "-b", branch_name], check=True)
        print(f"Created new branch {branch_name}.")

    # Commit each directory with a random commit date
    for output_dir in directories:
        # Add the directory to staging
        subprocess.run(["git", "add", output_dir], check=True)
        
        # Generate a random commit date for this directory
        commit_message = f"Add {language} client code for {output_dir}"
        commit_date = random_commit_date()
        
        # Commit the changes with the generated random date
        subprocess.run([
            "git", "commit", "-m", commit_message,
            "--date", commit_date
        ], check=True)
        
        print(f"Committed {language} client code for {output_dir} with date {commit_date}.")

# Function to recursively search for 'python-client' directories and commit them
def find_python_client_dirs_and_commit(root_dir):
    python_client_dirs = []
    
    # Traverse through the directory and find 'python-client' directories
    for subdir, _, _ in os.walk(root_dir):
        if subdir.endswith('python-client'):
            python_client_dirs.append(subdir)
    
    # Commit all the found directories with random dates
    git_create_branch_and_commit("python", python_client_dirs)

if __name__ == "__main__":
   
    root_directory = "/Users/seanbaker/Documents/GitHub/openapi-directory/APIs"
    find_python_client_dirs_and_commit(root_directory)