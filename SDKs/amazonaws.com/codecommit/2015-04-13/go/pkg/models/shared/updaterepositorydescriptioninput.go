package shared

// UpdateRepositoryDescriptionInput
// Represents the input of an update repository description operation.
type UpdateRepositoryDescriptionInput struct {
	RepositoryDescription *string `json:"repositoryDescription,omitempty"`
	RepositoryName        string  `json:"repositoryName"`
}
