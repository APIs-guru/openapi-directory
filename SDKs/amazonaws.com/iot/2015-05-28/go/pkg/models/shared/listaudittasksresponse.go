package shared



type ListAuditTasksResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Tasks []AuditTaskMetadata `json:"tasks,omitempty"`
    
}

