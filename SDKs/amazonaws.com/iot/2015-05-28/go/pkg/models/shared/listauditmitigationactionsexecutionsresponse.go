package shared

type ListAuditMitigationActionsExecutionsResponse struct {
	ActionsExecutions []AuditMitigationActionExecutionMetadata `json:"actionsExecutions"`
	NextToken         *string                                  `json:"nextToken"`
}
