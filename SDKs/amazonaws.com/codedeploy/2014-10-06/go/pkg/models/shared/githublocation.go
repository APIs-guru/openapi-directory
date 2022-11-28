package shared

// GitHubLocation
// Information about the location of application artifacts stored in GitHub.
type GitHubLocation struct {
	CommitID   *string `json:"commitId,omitempty"`
	Repository *string `json:"repository,omitempty"`
}
