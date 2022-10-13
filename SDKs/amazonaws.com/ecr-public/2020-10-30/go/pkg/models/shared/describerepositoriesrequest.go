package shared

type DescribeRepositoriesRequest struct {
	MaxResults      *int64   `json:"maxResults"`
	NextToken       *string  `json:"nextToken"`
	RegistryID      *string  `json:"registryId"`
	RepositoryNames []string `json:"repositoryNames"`
}
