package shared

type CompleteLayerUploadRequest struct {
	LayerDigests   []string `json:"layerDigests"`
	RegistryID     *string  `json:"registryId"`
	RepositoryName string   `json:"repositoryName"`
	UploadID       string   `json:"uploadId"`
}
