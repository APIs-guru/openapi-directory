package shared

type ListWorkspacesResponse struct {
	NextToken  *string            `json:"nextToken,omitempty"`
	Workspaces []WorkspaceSummary `json:"workspaces"`
}
