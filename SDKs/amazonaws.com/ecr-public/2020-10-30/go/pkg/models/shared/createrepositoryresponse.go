package shared

type CreateRepositoryResponse struct {
	CatalogData *RepositoryCatalogData `json:"catalogData"`
	Repository  *Repository            `json:"repository"`
}
