package shared

type DescribeImageScanFindingsRequest struct {
	ImageID        ImageIdentifier `json:"imageId"`
	MaxResults     *int64          `json:"maxResults,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
	RegistryID     *string         `json:"registryId,omitempty"`
	RepositoryName string          `json:"repositoryName"`
}
