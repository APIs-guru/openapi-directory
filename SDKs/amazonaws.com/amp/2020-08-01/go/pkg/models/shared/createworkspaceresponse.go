package shared

// CreateWorkspaceResponse
// Represents the output of a CreateWorkspace operation.
type CreateWorkspaceResponse struct {
	Arn         string            `json:"arn"`
	Status      WorkspaceStatus   `json:"status"`
	Tags        map[string]string `json:"tags,omitempty"`
	WorkspaceID string            `json:"workspaceId"`
}
