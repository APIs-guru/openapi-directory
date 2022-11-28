package shared

// UpdateRepositoryNameInput
// Represents the input of an update repository description operation.
type UpdateRepositoryNameInput struct {
	NewName string `json:"newName"`
	OldName string `json:"oldName"`
}
