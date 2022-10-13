package shared

type JobExecutionSummaryForThing struct {
	JobExecutionSummary *JobExecutionSummary `json:"jobExecutionSummary"`
	JobID               *string              `json:"jobId"`
}
