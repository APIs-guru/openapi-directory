package shared

type ListAuditMitigationActionsTasksResponse struct {
	NextToken *string                              `json:"nextToken"`
	Tasks     []AuditMitigationActionsTaskMetadata `json:"tasks"`
}
