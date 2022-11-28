package shared

// JobExecutionSummaryForJob
// Contains a summary of information about job executions for a specific job.
type JobExecutionSummaryForJob struct {
	JobExecutionSummary *JobExecutionSummary `json:"jobExecutionSummary,omitempty"`
	ThingArn            *string              `json:"thingArn,omitempty"`
}
