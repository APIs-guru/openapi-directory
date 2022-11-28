package shared

// BatchGetRepositoriesOutput
// Represents the output of a batch get repositories operation.
type BatchGetRepositoriesOutput struct {
	Repositories         []RepositoryMetadata `json:"repositories,omitempty"`
	RepositoriesNotFound []string             `json:"repositoriesNotFound,omitempty"`
}
