package shared



type PutImageScanningConfigurationRequest struct {
    ImageScanningConfiguration ImageScanningConfiguration `json:"imageScanningConfiguration"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

