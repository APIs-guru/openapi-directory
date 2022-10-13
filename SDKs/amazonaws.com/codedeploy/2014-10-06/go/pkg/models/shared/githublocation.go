package shared

type GitHubLocation struct {
	CommitID   *string `json:"commitId"`
	Repository *string `json:"repository"`
}
