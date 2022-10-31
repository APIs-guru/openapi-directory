package shared



type PutRepositoryCatalogDataRequest struct {
    CatalogData RepositoryCatalogDataInput `json:"catalogData"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

