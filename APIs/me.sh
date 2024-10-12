#!/bin/bash

# Function to generate a random commit date within the last year
random_commit_date() {
  days_ago=$((RANDOM % 365 + 1))  # Random number of days within the past year
  random_date=$(date -d "$days_ago days ago" +"%Y-%m-%dT%H:%M:%S")
  echo "$random_date"
}

# Function to commit the changes with a random commit date
git_commit_with_random_dates() {
  language="$1"
  directories=("${@:2}")

  # Commit each directory with a random commit date
  for output_dir in "${directories[@]}"; do
    git add "$output_dir"
    
    commit_message="Add $language client code for $output_dir"
    commit_date=$(random_commit_date)
    
    GIT_COMMITTER_DATE="$commit_date" git commit -m "$commit_message" --date="$commit_date"
    echo "Committed $language client code for $output_dir with date $commit_date."

    # Wait for 2 minutes before the next commit
    echo "Waiting for 2 minutes before the next commit..."
    sleep 120
  done
}

# Main function to find 'python-client' directories and commit them
find_python_client_dirs_and_commit() {
  root_dir="$1"
  language="$2"
  python_client_dirs=()

  # Find all directories ending with 'python-client'
  while IFS= read -r -d '' dir; do
    python_client_dirs+=("$dir")
  done < <(find "$root_dir" -type d -name "python-client" -print0)

  # Commit to git with randomized dates
  git_commit_with_random_dates "$language" "${python_client_dirs[@]}"
}

# Set the root directory and start the process
root_directory="/Users/seanbaker/Documents/GitHub/openapi-directory/APIs"  # Change this to your actual path
language="python"
find_python_client_dirs_and_commit "$root_directory" "$language"
