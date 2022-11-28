package shared

// DeleteBranchInput
// Represents the input of a delete branch operation.
type DeleteBranchInput struct {
	BranchName     string `json:"branchName"`
	RepositoryName string `json:"repositoryName"`
}
