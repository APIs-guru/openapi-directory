package shared

import (
	"time"
)

// InstanceTarget
//
//	A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.
type InstanceTarget struct {
	DeploymentID    *string           `json:"deploymentId,omitempty"`
	InstanceLabel   *TargetLabelEnum  `json:"instanceLabel,omitempty"`
	LastUpdatedAt   *time.Time        `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents []LifecycleEvent  `json:"lifecycleEvents,omitempty"`
	Status          *TargetStatusEnum `json:"status,omitempty"`
	TargetArn       *string           `json:"targetArn,omitempty"`
	TargetID        *string           `json:"targetId,omitempty"`
}
