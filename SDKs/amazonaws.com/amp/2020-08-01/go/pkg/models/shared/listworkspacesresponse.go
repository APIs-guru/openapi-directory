package shared

// ListWorkspacesResponse
// Represents the output of a ListWorkspaces operation.
type ListWorkspacesResponse struct {
	NextToken  *string            `json:"nextToken,omitempty"`
	Workspaces []WorkspaceSummary `json:"workspaces"`
}
