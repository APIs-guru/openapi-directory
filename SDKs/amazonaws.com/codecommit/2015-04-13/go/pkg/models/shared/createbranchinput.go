package shared

// CreateBranchInput
// Represents the input of a create branch operation.
type CreateBranchInput struct {
	BranchName     string `json:"branchName"`
	CommitID       string `json:"commitId"`
	RepositoryName string `json:"repositoryName"`
}
