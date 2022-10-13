package shared

type ScheduledAuditMetadata struct {
	DayOfMonth         *string             `json:"dayOfMonth"`
	DayOfWeek          *DayOfWeekEnum      `json:"dayOfWeek"`
	Frequency          *AuditFrequencyEnum `json:"frequency"`
	ScheduledAuditArn  *string             `json:"scheduledAuditArn"`
	ScheduledAuditName *string             `json:"scheduledAuditName"`
}
