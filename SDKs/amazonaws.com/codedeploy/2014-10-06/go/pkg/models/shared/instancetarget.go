package shared

import (
	"time"
)

type InstanceTarget struct {
	DeploymentID    *string           `json:"deploymentId"`
	InstanceLabel   *TargetLabelEnum  `json:"instanceLabel"`
	LastUpdatedAt   *time.Time        `json:"lastUpdatedAt"`
	LifecycleEvents []LifecycleEvent  `json:"lifecycleEvents"`
	Status          *TargetStatusEnum `json:"status"`
	TargetArn       *string           `json:"targetArn"`
	TargetID        *string           `json:"targetId"`
}
