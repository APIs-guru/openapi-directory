package shared

// GetBranchInput
// Represents the input of a get branch operation.
type GetBranchInput struct {
	BranchName     *string `json:"branchName,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
