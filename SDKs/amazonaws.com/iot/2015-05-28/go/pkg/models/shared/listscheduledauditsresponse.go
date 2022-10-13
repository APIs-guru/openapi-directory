package shared

type ListScheduledAuditsResponse struct {
	NextToken       *string                  `json:"nextToken"`
	ScheduledAudits []ScheduledAuditMetadata `json:"scheduledAudits"`
}
