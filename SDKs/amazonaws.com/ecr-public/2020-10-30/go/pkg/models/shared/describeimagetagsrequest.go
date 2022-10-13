package shared

type DescribeImageTagsRequest struct {
	MaxResults     *int64  `json:"maxResults"`
	NextToken      *string `json:"nextToken"`
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
