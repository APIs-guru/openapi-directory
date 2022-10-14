package shared

type ListRepositoriesOutput struct {
	NextToken    *string                `json:"nextToken,omitempty"`
	Repositories []RepositoryNameIDPair `json:"repositories,omitempty"`
}
