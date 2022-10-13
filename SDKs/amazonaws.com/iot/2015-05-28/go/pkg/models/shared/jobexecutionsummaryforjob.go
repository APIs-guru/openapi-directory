package shared

type JobExecutionSummaryForJob struct {
	JobExecutionSummary *JobExecutionSummary `json:"jobExecutionSummary"`
	ThingArn            *string              `json:"thingArn"`
}
