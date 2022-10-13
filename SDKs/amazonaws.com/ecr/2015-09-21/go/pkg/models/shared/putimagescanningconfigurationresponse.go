package shared

type PutImageScanningConfigurationResponse struct {
	ImageScanningConfiguration *ImageScanningConfiguration `json:"imageScanningConfiguration"`
	RegistryID                 *string                     `json:"registryId"`
	RepositoryName             *string                     `json:"repositoryName"`
}
