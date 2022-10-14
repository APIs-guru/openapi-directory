package shared

type JobExecutionSummaryForJob struct {
	JobExecutionSummary *JobExecutionSummary `json:"jobExecutionSummary,omitempty"`
	ThingArn            *string              `json:"thingArn,omitempty"`
}
