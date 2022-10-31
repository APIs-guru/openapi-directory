package shared



type DescribeScheduledAuditResponse struct {
    DayOfMonth *string `json:"dayOfMonth,omitempty"`
    DayOfWeek *DayOfWeekEnum `json:"dayOfWeek,omitempty"`
    Frequency *AuditFrequencyEnum `json:"frequency,omitempty"`
    ScheduledAuditArn *string `json:"scheduledAuditArn,omitempty"`
    ScheduledAuditName *string `json:"scheduledAuditName,omitempty"`
    TargetCheckNames []string `json:"targetCheckNames,omitempty"`
    
}

