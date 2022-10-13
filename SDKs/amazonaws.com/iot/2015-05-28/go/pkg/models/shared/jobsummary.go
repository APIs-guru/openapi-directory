package shared

import (
	"time"
)

type JobSummary struct {
	CompletedAt     *time.Time           `json:"completedAt"`
	CreatedAt       *time.Time           `json:"createdAt"`
	JobArn          *string              `json:"jobArn"`
	JobID           *string              `json:"jobId"`
	LastUpdatedAt   *time.Time           `json:"lastUpdatedAt"`
	Status          *JobStatusEnum       `json:"status"`
	TargetSelection *TargetSelectionEnum `json:"targetSelection"`
	ThingGroupID    *string              `json:"thingGroupId"`
}
