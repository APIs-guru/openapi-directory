package shared



type StartImageScanRequest struct {
    ImageID ImageIdentifier `json:"imageId"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

