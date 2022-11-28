package shared

import (
	"time"
)

// MigrationTaskSummary
// MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
type MigrationTaskSummary struct {
	MigrationTaskName    *string     `json:"MigrationTaskName,omitempty"`
	ProgressPercent      *int64      `json:"ProgressPercent,omitempty"`
	ProgressUpdateStream *string     `json:"ProgressUpdateStream,omitempty"`
	Status               *StatusEnum `json:"Status,omitempty"`
	StatusDetail         *string     `json:"StatusDetail,omitempty"`
	UpdateDateTime       *time.Time  `json:"UpdateDateTime,omitempty"`
}
