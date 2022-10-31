package shared

type PutImageScanningConfigurationResponse struct {
	ImageScanningConfiguration *ImageScanningConfiguration `json:"imageScanningConfiguration,omitempty"`
	RegistryID                 *string                     `json:"registryId,omitempty"`
	RepositoryName             *string                     `json:"repositoryName,omitempty"`
}
