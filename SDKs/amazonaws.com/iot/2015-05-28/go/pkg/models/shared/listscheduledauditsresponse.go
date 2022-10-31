package shared



type ListScheduledAuditsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ScheduledAudits []ScheduledAuditMetadata `json:"scheduledAudits,omitempty"`
    
}

