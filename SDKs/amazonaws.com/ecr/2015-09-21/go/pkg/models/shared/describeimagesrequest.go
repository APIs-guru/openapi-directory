package shared

type DescribeImagesRequest struct {
	Filter         *DescribeImagesFilter `json:"filter"`
	ImageIds       []ImageIdentifier     `json:"imageIds"`
	MaxResults     *int64                `json:"maxResults"`
	NextToken      *string               `json:"nextToken"`
	RegistryID     *string               `json:"registryId"`
	RepositoryName string                `json:"repositoryName"`
}
