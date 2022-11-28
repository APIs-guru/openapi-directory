package shared

// GitHubCodeDestination
// Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
type GitHubCodeDestination struct {
	Description       *string `json:"description,omitempty"`
	IssuesEnabled     bool    `json:"issuesEnabled"`
	Name              string  `json:"name"`
	Owner             string  `json:"owner"`
	PrivateRepository bool    `json:"privateRepository"`
	Token             string  `json:"token"`
	Type              string  `json:"type"`
}
