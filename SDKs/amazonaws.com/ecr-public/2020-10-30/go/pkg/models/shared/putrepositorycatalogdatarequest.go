package shared

type PutRepositoryCatalogDataRequest struct {
	CatalogData    RepositoryCatalogDataInput `json:"catalogData"`
	RegistryID     *string                    `json:"registryId"`
	RepositoryName string                     `json:"repositoryName"`
}
