package shared

import (
	"time"
)

// JobSummary
// The job summary.
type JobSummary struct {
	CompletedAt     *time.Time           `json:"completedAt,omitempty"`
	CreatedAt       *time.Time           `json:"createdAt,omitempty"`
	JobArn          *string              `json:"jobArn,omitempty"`
	JobID           *string              `json:"jobId,omitempty"`
	LastUpdatedAt   *time.Time           `json:"lastUpdatedAt,omitempty"`
	Status          *JobStatusEnum       `json:"status,omitempty"`
	TargetSelection *TargetSelectionEnum `json:"targetSelection,omitempty"`
	ThingGroupID    *string              `json:"thingGroupId,omitempty"`
}
