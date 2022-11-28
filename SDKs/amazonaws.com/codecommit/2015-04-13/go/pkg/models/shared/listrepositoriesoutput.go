package shared

// ListRepositoriesOutput
// Represents the output of a list repositories operation.
type ListRepositoriesOutput struct {
	NextToken    *string                `json:"nextToken,omitempty"`
	Repositories []RepositoryNameIDPair `json:"repositories,omitempty"`
}
