package shared



type CreateRepositoryResponse struct {
    CatalogData *RepositoryCatalogData `json:"catalogData,omitempty"`
    Repository *Repository `json:"repository,omitempty"`
    
}

