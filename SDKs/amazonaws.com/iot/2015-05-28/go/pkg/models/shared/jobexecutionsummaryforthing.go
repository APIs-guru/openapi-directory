package shared

// JobExecutionSummaryForThing
// The job execution summary for a thing.
type JobExecutionSummaryForThing struct {
	JobExecutionSummary *JobExecutionSummary `json:"jobExecutionSummary,omitempty"`
	JobID               *string              `json:"jobId,omitempty"`
}
