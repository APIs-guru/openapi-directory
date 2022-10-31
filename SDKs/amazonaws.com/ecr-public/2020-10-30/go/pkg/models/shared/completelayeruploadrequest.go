package shared



type CompleteLayerUploadRequest struct {
    LayerDigests []string `json:"layerDigests"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    UploadID string `json:"uploadId"`
    
}

