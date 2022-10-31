package shared



type UploadLayerPartResponse struct {
    LastByteReceived *int64 `json:"lastByteReceived,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    UploadID *string `json:"uploadId,omitempty"`
    
}

