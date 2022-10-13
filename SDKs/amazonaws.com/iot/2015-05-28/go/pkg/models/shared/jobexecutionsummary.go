package shared

import (
	"time"
)

type JobExecutionSummary struct {
	ExecutionNumber *int64                  `json:"executionNumber"`
	LastUpdatedAt   *time.Time              `json:"lastUpdatedAt"`
	QueuedAt        *time.Time              `json:"queuedAt"`
	StartedAt       *time.Time              `json:"startedAt"`
	Status          *JobExecutionStatusEnum `json:"status"`
}
