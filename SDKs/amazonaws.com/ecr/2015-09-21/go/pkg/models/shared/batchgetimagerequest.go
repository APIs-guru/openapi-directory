package shared



type BatchGetImageRequest struct {
    AcceptedMediaTypes []string `json:"acceptedMediaTypes,omitempty"`
    ImageIds []ImageIdentifier `json:"imageIds"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

