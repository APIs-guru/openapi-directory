package shared

type BatchDeleteImageRequest struct {
	ImageIds       []ImageIdentifier `json:"imageIds"`
	RegistryID     *string           `json:"registryId"`
	RepositoryName string            `json:"repositoryName"`
}
