package shared

type InitiateLayerUploadRequest struct {
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
