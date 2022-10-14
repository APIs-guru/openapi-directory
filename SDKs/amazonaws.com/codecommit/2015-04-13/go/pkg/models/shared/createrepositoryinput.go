package shared

type CreateRepositoryInput struct {
	RepositoryDescription *string           `json:"repositoryDescription,omitempty"`
	RepositoryName        string            `json:"repositoryName"`
	Tags                  map[string]string `json:"tags,omitempty"`
}
