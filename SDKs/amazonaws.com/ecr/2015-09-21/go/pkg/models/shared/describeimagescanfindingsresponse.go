package shared

type DescribeImageScanFindingsResponse struct {
	ImageID           *ImageIdentifier   `json:"imageId"`
	ImageScanFindings *ImageScanFindings `json:"imageScanFindings"`
	ImageScanStatus   *ImageScanStatus   `json:"imageScanStatus"`
	NextToken         *string            `json:"nextToken"`
	RegistryID        *string            `json:"registryId"`
	RepositoryName    *string            `json:"repositoryName"`
}
