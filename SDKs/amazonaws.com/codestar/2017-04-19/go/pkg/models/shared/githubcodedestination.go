package shared

type GitHubCodeDestination struct {
	Description       *string `json:"description"`
	IssuesEnabled     bool    `json:"issuesEnabled"`
	Name              string  `json:"name"`
	Owner             string  `json:"owner"`
	PrivateRepository bool    `json:"privateRepository"`
	Token             string  `json:"token"`
	Type              string  `json:"type"`
}
