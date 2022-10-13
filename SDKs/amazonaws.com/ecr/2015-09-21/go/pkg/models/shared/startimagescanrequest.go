package shared

type StartImageScanRequest struct {
	ImageID        ImageIdentifier `json:"imageId"`
	RegistryID     *string         `json:"registryId"`
	RepositoryName string          `json:"repositoryName"`
}
