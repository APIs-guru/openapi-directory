package shared

type CodeDestination struct {
	CodeCommit *CodeCommitCodeDestination `json:"codeCommit"`
	GitHub     *GitHubCodeDestination     `json:"gitHub"`
}
