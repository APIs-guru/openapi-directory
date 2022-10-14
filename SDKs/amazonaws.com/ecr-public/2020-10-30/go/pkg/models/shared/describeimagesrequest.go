package shared

type DescribeImagesRequest struct {
	ImageIds       []ImageIdentifier `json:"imageIds,omitempty"`
	MaxResults     *int64            `json:"maxResults,omitempty"`
	NextToken      *string           `json:"nextToken,omitempty"`
	RegistryID     *string           `json:"registryId,omitempty"`
	RepositoryName string            `json:"repositoryName"`
}
