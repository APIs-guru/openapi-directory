package shared

import (
	"time"
)

// DataRepositoryTaskStatus
// Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
type DataRepositoryTaskStatus struct {
	FailedCount     *int64     `json:"FailedCount,omitempty"`
	LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
	SucceededCount  *int64     `json:"SucceededCount,omitempty"`
	TotalCount      *int64     `json:"TotalCount,omitempty"`
}
