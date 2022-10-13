package shared

type DescribeImageScanFindingsRequest struct {
	ImageID        ImageIdentifier `json:"imageId"`
	MaxResults     *int64          `json:"maxResults"`
	NextToken      *string         `json:"nextToken"`
	RegistryID     *string         `json:"registryId"`
	RepositoryName string          `json:"repositoryName"`
}
