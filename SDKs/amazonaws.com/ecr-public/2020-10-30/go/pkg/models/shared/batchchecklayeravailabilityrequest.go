package shared



type BatchCheckLayerAvailabilityRequest struct {
    LayerDigests []string `json:"layerDigests"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

