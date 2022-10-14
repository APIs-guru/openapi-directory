package shared

type CompleteLayerUploadResponse struct {
	LayerDigest    *string `json:"layerDigest,omitempty"`
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
	UploadID       *string `json:"uploadId,omitempty"`
}
