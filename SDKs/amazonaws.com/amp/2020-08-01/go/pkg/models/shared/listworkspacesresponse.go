package shared

type ListWorkspacesResponse struct {
	NextToken  *string            `json:"nextToken"`
	Workspaces []WorkspaceSummary `json:"workspaces"`
}
