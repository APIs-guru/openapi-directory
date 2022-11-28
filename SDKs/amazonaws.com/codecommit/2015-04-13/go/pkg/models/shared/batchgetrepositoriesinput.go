package shared

// BatchGetRepositoriesInput
// Represents the input of a batch get repositories operation.
type BatchGetRepositoriesInput struct {
	RepositoryNames []string `json:"repositoryNames"`
}
