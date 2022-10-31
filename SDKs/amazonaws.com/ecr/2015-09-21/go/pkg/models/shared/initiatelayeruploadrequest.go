package shared



type InitiateLayerUploadRequest struct {
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

