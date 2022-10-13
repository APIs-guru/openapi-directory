package shared

import (
	"time"
)

type MigrationTaskSummary struct {
	MigrationTaskName    *string     `json:"MigrationTaskName"`
	ProgressPercent      *int64      `json:"ProgressPercent"`
	ProgressUpdateStream *string     `json:"ProgressUpdateStream"`
	Status               *StatusEnum `json:"Status"`
	StatusDetail         *string     `json:"StatusDetail"`
	UpdateDateTime       *time.Time  `json:"UpdateDateTime"`
}
