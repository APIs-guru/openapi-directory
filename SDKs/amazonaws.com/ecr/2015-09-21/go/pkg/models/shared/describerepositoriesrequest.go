package shared

type DescribeRepositoriesRequest struct {
	MaxResults      *int64   `json:"maxResults,omitempty"`
	NextToken       *string  `json:"nextToken,omitempty"`
	RegistryID      *string  `json:"registryId,omitempty"`
	RepositoryNames []string `json:"repositoryNames,omitempty"`
}
