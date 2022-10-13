package shared

type UploadLayerPartResponse struct {
	LastByteReceived *int64  `json:"lastByteReceived"`
	RegistryID       *string `json:"registryId"`
	RepositoryName   *string `json:"repositoryName"`
	UploadID         *string `json:"uploadId"`
}
