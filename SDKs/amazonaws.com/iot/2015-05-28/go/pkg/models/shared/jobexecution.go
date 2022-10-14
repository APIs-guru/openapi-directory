package shared

import (
	"time"
)

type JobExecution struct {
	ApproximateSecondsBeforeTimedOut *int64                     `json:"approximateSecondsBeforeTimedOut,omitempty"`
	ExecutionNumber                  *int64                     `json:"executionNumber,omitempty"`
	ForceCanceled                    *bool                      `json:"forceCanceled,omitempty"`
	JobID                            *string                    `json:"jobId,omitempty"`
	LastUpdatedAt                    *time.Time                 `json:"lastUpdatedAt,omitempty"`
	QueuedAt                         *time.Time                 `json:"queuedAt,omitempty"`
	StartedAt                        *time.Time                 `json:"startedAt,omitempty"`
	Status                           *JobExecutionStatusEnum    `json:"status,omitempty"`
	StatusDetails                    *JobExecutionStatusDetails `json:"statusDetails,omitempty"`
	ThingArn                         *string                    `json:"thingArn,omitempty"`
	VersionNumber                    *int64                     `json:"versionNumber,omitempty"`
}
