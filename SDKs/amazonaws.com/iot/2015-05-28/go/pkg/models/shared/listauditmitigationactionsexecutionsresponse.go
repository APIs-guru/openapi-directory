package shared



type ListAuditMitigationActionsExecutionsResponse struct {
    ActionsExecutions []AuditMitigationActionExecutionMetadata `json:"actionsExecutions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

