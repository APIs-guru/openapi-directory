package shared

type ListRepositoriesOutput struct {
	NextToken    *string                `json:"nextToken"`
	Repositories []RepositoryNameIDPair `json:"repositories"`
}
