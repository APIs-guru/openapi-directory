package shared

import (
	"time"
)

type MigrationTask struct {
	MigrationTaskName     *string             `json:"MigrationTaskName"`
	ProgressUpdateStream  *string             `json:"ProgressUpdateStream"`
	ResourceAttributeList []ResourceAttribute `json:"ResourceAttributeList"`
	Task                  *Task               `json:"Task"`
	UpdateDateTime        *time.Time          `json:"UpdateDateTime"`
}
