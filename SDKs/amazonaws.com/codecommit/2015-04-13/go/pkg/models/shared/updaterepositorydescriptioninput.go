package shared

type UpdateRepositoryDescriptionInput struct {
	RepositoryDescription *string `json:"repositoryDescription"`
	RepositoryName        string  `json:"repositoryName"`
}
