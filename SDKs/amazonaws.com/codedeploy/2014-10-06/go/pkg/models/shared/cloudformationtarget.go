package shared

import (
	"time"
)

type CloudFormationTarget struct {
	DeploymentID        *string           `json:"deploymentId,omitempty"`
	LastUpdatedAt       *time.Time        `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents     []LifecycleEvent  `json:"lifecycleEvents,omitempty"`
	ResourceType        *string           `json:"resourceType,omitempty"`
	Status              *TargetStatusEnum `json:"status,omitempty"`
	TargetID            *string           `json:"targetId,omitempty"`
	TargetVersionWeight *float64          `json:"targetVersionWeight,omitempty"`
}
