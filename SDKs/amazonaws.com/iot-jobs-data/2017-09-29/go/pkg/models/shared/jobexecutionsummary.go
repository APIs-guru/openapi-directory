package shared

type JobExecutionSummary struct {
	ExecutionNumber *int64  `json:"executionNumber"`
	JobID           *string `json:"jobId"`
	LastUpdatedAt   *int64  `json:"lastUpdatedAt"`
	QueuedAt        *int64  `json:"queuedAt"`
	StartedAt       *int64  `json:"startedAt"`
	VersionNumber   *int64  `json:"versionNumber"`
}
