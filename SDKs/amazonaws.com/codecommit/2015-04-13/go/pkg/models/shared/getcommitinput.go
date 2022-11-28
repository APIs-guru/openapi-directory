package shared

// GetCommitInput
// Represents the input of a get commit operation.
type GetCommitInput struct {
	CommitID       string `json:"commitId"`
	RepositoryName string `json:"repositoryName"`
}
