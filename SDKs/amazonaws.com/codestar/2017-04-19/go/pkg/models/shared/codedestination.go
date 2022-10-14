package shared

type CodeDestination struct {
	CodeCommit *CodeCommitCodeDestination `json:"codeCommit,omitempty"`
	GitHub     *GitHubCodeDestination     `json:"gitHub,omitempty"`
}
