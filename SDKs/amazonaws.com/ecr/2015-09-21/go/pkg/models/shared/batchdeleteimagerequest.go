package shared



type BatchDeleteImageRequest struct {
    ImageIds []ImageIdentifier `json:"imageIds"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

