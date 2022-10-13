package shared

type BatchGetRepositoriesOutput struct {
	Repositories         []RepositoryMetadata `json:"repositories"`
	RepositoriesNotFound []string             `json:"repositoriesNotFound"`
}
