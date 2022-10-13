package shared

import (
	"time"
)

type JobExecution struct {
	ApproximateSecondsBeforeTimedOut *int64                     `json:"approximateSecondsBeforeTimedOut"`
	ExecutionNumber                  *int64                     `json:"executionNumber"`
	ForceCanceled                    *bool                      `json:"forceCanceled"`
	JobID                            *string                    `json:"jobId"`
	LastUpdatedAt                    *time.Time                 `json:"lastUpdatedAt"`
	QueuedAt                         *time.Time                 `json:"queuedAt"`
	StartedAt                        *time.Time                 `json:"startedAt"`
	Status                           *JobExecutionStatusEnum    `json:"status"`
	StatusDetails                    *JobExecutionStatusDetails `json:"statusDetails"`
	ThingArn                         *string                    `json:"thingArn"`
	VersionNumber                    *int64                     `json:"versionNumber"`
}
