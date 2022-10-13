package shared

import (
	"time"
)

type CloudFormationTarget struct {
	DeploymentID        *string           `json:"deploymentId"`
	LastUpdatedAt       *time.Time        `json:"lastUpdatedAt"`
	LifecycleEvents     []LifecycleEvent  `json:"lifecycleEvents"`
	ResourceType        *string           `json:"resourceType"`
	Status              *TargetStatusEnum `json:"status"`
	TargetID            *string           `json:"targetId"`
	TargetVersionWeight *float64          `json:"targetVersionWeight"`
}
