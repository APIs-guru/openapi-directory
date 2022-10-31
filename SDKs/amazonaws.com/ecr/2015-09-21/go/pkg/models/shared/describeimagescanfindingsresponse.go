package shared

type DescribeImageScanFindingsResponse struct {
	ImageID           *ImageIdentifier   `json:"imageId,omitempty"`
	ImageScanFindings *ImageScanFindings `json:"imageScanFindings,omitempty"`
	ImageScanStatus   *ImageScanStatus   `json:"imageScanStatus,omitempty"`
	NextToken         *string            `json:"nextToken,omitempty"`
	RegistryID        *string            `json:"registryId,omitempty"`
	RepositoryName    *string            `json:"repositoryName,omitempty"`
}
