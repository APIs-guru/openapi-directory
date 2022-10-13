package shared

import (
	"time"
)

type NotifyMigrationTaskStateRequest struct {
	DryRun               *bool     `json:"DryRun"`
	MigrationTaskName    string    `json:"MigrationTaskName"`
	NextUpdateSeconds    int64     `json:"NextUpdateSeconds"`
	ProgressUpdateStream string    `json:"ProgressUpdateStream"`
	Task                 Task      `json:"Task"`
	UpdateDateTime       time.Time `json:"UpdateDateTime"`
}
