package shared

type JobExecution struct {
	ApproximateSecondsBeforeTimedOut *int64                  `json:"approximateSecondsBeforeTimedOut"`
	ExecutionNumber                  *int64                  `json:"executionNumber"`
	JobDocument                      *string                 `json:"jobDocument"`
	JobID                            *string                 `json:"jobId"`
	LastUpdatedAt                    *int64                  `json:"lastUpdatedAt"`
	QueuedAt                         *int64                  `json:"queuedAt"`
	StartedAt                        *int64                  `json:"startedAt"`
	Status                           *JobExecutionStatusEnum `json:"status"`
	StatusDetails                    map[string]string       `json:"statusDetails"`
	ThingName                        *string                 `json:"thingName"`
	VersionNumber                    *int64                  `json:"versionNumber"`
}
