package shared

type DeleteRepositoryRequest struct {
	Force          *bool   `json:"force"`
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
