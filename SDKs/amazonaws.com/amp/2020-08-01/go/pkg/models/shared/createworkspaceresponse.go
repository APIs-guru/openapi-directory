package shared



type CreateWorkspaceResponse struct {
    Arn string `json:"arn"`
    Status WorkspaceStatus `json:"status"`
    Tags map[string]string `json:"tags,omitempty"`
    WorkspaceID string `json:"workspaceId"`
    
}

