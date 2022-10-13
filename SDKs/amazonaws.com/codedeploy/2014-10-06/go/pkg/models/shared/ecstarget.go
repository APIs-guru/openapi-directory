package shared

import (
	"time"
)

type EcsTarget struct {
	DeploymentID    *string           `json:"deploymentId"`
	LastUpdatedAt   *time.Time        `json:"lastUpdatedAt"`
	LifecycleEvents []LifecycleEvent  `json:"lifecycleEvents"`
	Status          *TargetStatusEnum `json:"status"`
	TargetArn       *string           `json:"targetArn"`
	TargetID        *string           `json:"targetId"`
	TaskSetsInfo    []EcsTaskSet      `json:"taskSetsInfo"`
}
