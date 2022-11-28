package shared

// UpdateDefaultBranchInput
// Represents the input of an update default branch operation.
type UpdateDefaultBranchInput struct {
	DefaultBranchName string `json:"defaultBranchName"`
	RepositoryName    string `json:"repositoryName"`
}
