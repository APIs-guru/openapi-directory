package shared

// CreateRepositoryInput
// Represents the input of a create repository operation.
type CreateRepositoryInput struct {
	RepositoryDescription *string           `json:"repositoryDescription,omitempty"`
	RepositoryName        string            `json:"repositoryName"`
	Tags                  map[string]string `json:"tags,omitempty"`
}
