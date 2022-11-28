package shared

// JobExecution
// Contains data about a job execution.
type JobExecution struct {
	ApproximateSecondsBeforeTimedOut *int64                  `json:"approximateSecondsBeforeTimedOut,omitempty"`
	ExecutionNumber                  *int64                  `json:"executionNumber,omitempty"`
	JobDocument                      *string                 `json:"jobDocument,omitempty"`
	JobID                            *string                 `json:"jobId,omitempty"`
	LastUpdatedAt                    *int64                  `json:"lastUpdatedAt,omitempty"`
	QueuedAt                         *int64                  `json:"queuedAt,omitempty"`
	StartedAt                        *int64                  `json:"startedAt,omitempty"`
	Status                           *JobExecutionStatusEnum `json:"status,omitempty"`
	StatusDetails                    map[string]string       `json:"statusDetails,omitempty"`
	ThingName                        *string                 `json:"thingName,omitempty"`
	VersionNumber                    *int64                  `json:"versionNumber,omitempty"`
}
