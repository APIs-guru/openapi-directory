package shared



type StartImageScanResponse struct {
    ImageID *ImageIdentifier `json:"imageId,omitempty"`
    ImageScanStatus *ImageScanStatus `json:"imageScanStatus,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

