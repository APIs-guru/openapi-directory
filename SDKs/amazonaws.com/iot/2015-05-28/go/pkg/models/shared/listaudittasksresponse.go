package shared

type ListAuditTasksResponse struct {
	NextToken *string             `json:"nextToken"`
	Tasks     []AuditTaskMetadata `json:"tasks"`
}
