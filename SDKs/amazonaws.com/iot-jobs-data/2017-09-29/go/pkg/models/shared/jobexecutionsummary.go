package shared

// JobExecutionSummary
// Contains a subset of information about a job execution.
type JobExecutionSummary struct {
	ExecutionNumber *int64  `json:"executionNumber,omitempty"`
	JobID           *string `json:"jobId,omitempty"`
	LastUpdatedAt   *int64  `json:"lastUpdatedAt,omitempty"`
	QueuedAt        *int64  `json:"queuedAt,omitempty"`
	StartedAt       *int64  `json:"startedAt,omitempty"`
	VersionNumber   *int64  `json:"versionNumber,omitempty"`
}
