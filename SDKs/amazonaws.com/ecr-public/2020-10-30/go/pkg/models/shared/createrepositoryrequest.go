package shared

type CreateRepositoryRequest struct {
	CatalogData    *RepositoryCatalogDataInput `json:"catalogData"`
	RepositoryName string                      `json:"repositoryName"`
	Tags           []Tag                       `json:"tags"`
}
