package shared

type DescribeImagesRequest struct {
	Filter         *DescribeImagesFilter `json:"filter,omitempty"`
	ImageIds       []ImageIdentifier     `json:"imageIds,omitempty"`
	MaxResults     *int64                `json:"maxResults,omitempty"`
	NextToken      *string               `json:"nextToken,omitempty"`
	RegistryID     *string               `json:"registryId,omitempty"`
	RepositoryName string                `json:"repositoryName"`
}
