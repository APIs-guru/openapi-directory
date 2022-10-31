package shared

import (
"time")

type JobExecutionSummary struct {
    ExecutionNumber *int64 `json:"executionNumber,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    QueuedAt *time.Time `json:"queuedAt,omitempty"`
    StartedAt *time.Time `json:"startedAt,omitempty"`
    Status *JobExecutionStatusEnum `json:"status,omitempty"`
    
}

