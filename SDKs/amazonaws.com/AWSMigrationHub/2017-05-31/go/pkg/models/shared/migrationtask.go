package shared

import (
	"time"
)

// MigrationTask
// Represents a migration task in a migration tool.
type MigrationTask struct {
	MigrationTaskName     *string             `json:"MigrationTaskName,omitempty"`
	ProgressUpdateStream  *string             `json:"ProgressUpdateStream,omitempty"`
	ResourceAttributeList []ResourceAttribute `json:"ResourceAttributeList,omitempty"`
	Task                  *Task               `json:"Task,omitempty"`
	UpdateDateTime        *time.Time          `json:"UpdateDateTime,omitempty"`
}
