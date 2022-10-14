package shared

type GetRepositoryCatalogDataRequest struct {
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
