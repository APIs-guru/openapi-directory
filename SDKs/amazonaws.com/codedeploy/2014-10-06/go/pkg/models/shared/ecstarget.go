package shared

import (
	"time"
)

type EcsTarget struct {
	DeploymentID    *string           `json:"deploymentId,omitempty"`
	LastUpdatedAt   *time.Time        `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents []LifecycleEvent  `json:"lifecycleEvents,omitempty"`
	Status          *TargetStatusEnum `json:"status,omitempty"`
	TargetArn       *string           `json:"targetArn,omitempty"`
	TargetID        *string           `json:"targetId,omitempty"`
	TaskSetsInfo    []EcsTaskSet      `json:"taskSetsInfo,omitempty"`
}
