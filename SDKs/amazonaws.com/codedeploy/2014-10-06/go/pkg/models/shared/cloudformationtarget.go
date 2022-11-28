package shared

import (
	"time"
)

// CloudFormationTarget
//
//	Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
type CloudFormationTarget struct {
	DeploymentID        *string           `json:"deploymentId,omitempty"`
	LastUpdatedAt       *time.Time        `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents     []LifecycleEvent  `json:"lifecycleEvents,omitempty"`
	ResourceType        *string           `json:"resourceType,omitempty"`
	Status              *TargetStatusEnum `json:"status,omitempty"`
	TargetID            *string           `json:"targetId,omitempty"`
	TargetVersionWeight *float64          `json:"targetVersionWeight,omitempty"`
}
