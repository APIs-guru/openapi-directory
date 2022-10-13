package shared

type CompleteLayerUploadResponse struct {
	LayerDigest    *string `json:"layerDigest"`
	RegistryID     *string `json:"registryId"`
	RepositoryName *string `json:"repositoryName"`
	UploadID       *string `json:"uploadId"`
}
