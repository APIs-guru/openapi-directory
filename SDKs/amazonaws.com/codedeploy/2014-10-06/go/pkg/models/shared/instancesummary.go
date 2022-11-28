package shared

import (
	"time"
)

// InstanceSummary
// Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.
type InstanceSummary struct {
	DeploymentID    *string             `json:"deploymentId,omitempty"`
	InstanceID      *string             `json:"instanceId,omitempty"`
	InstanceType    *InstanceTypeEnum   `json:"instanceType,omitempty"`
	LastUpdatedAt   *time.Time          `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents []LifecycleEvent    `json:"lifecycleEvents,omitempty"`
	Status          *InstanceStatusEnum `json:"status,omitempty"`
}
