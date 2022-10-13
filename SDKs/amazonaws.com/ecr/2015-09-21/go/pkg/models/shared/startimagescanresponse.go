package shared

type StartImageScanResponse struct {
	ImageID         *ImageIdentifier `json:"imageId"`
	ImageScanStatus *ImageScanStatus `json:"imageScanStatus"`
	RegistryID      *string          `json:"registryId"`
	RepositoryName  *string          `json:"repositoryName"`
}
