package shared

// ListBranchesInput
// Represents the input of a list branches operation.
type ListBranchesInput struct {
	NextToken      *string `json:"nextToken,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
