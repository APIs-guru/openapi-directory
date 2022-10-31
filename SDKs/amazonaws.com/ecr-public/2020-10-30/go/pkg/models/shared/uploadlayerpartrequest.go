package shared



type UploadLayerPartRequest struct {
    LayerPartBlob string `json:"layerPartBlob"`
    PartFirstByte int64 `json:"partFirstByte"`
    PartLastByte int64 `json:"partLastByte"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    UploadID string `json:"uploadId"`
    
}

