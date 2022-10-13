package shared

type BatchGetImageRequest struct {
	AcceptedMediaTypes []string          `json:"acceptedMediaTypes"`
	ImageIds           []ImageIdentifier `json:"imageIds"`
	RegistryID         *string           `json:"registryId"`
	RepositoryName     string            `json:"repositoryName"`
}
