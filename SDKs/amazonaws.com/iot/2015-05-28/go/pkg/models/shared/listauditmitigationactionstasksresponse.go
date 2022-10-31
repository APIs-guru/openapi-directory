package shared



type ListAuditMitigationActionsTasksResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tasks []AuditMitigationActionsTaskMetadata `json:"tasks,omitempty"`
    
}

