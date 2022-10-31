package shared



type CreateRepositoryRequest struct {
    CatalogData *RepositoryCatalogDataInput `json:"catalogData,omitempty"`
    RepositoryName string `json:"repositoryName"`
    Tags []Tag `json:"tags,omitempty"`
    
}

