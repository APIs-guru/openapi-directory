package shared

// CodeDestination
// The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
type CodeDestination struct {
	CodeCommit *CodeCommitCodeDestination `json:"codeCommit,omitempty"`
	GitHub     *GitHubCodeDestination     `json:"gitHub,omitempty"`
}
