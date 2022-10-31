package shared

type GitHubLocation struct {
	CommitID   *string `json:"commitId,omitempty"`
	Repository *string `json:"repository,omitempty"`
}
