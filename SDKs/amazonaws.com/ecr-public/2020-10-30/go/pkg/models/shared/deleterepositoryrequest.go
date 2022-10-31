package shared



type DeleteRepositoryRequest struct {
    Force *bool `json:"force,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

