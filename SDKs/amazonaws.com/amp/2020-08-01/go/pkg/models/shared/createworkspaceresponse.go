package shared

type CreateWorkspaceResponse struct {
	Arn         string            `json:"arn"`
	Status      WorkspaceStatus   `json:"status"`
	Tags        map[string]string `json:"tags"`
	WorkspaceID string            `json:"workspaceId"`
}
