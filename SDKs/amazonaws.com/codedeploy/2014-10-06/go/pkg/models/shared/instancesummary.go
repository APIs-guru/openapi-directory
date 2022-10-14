package shared

import (
	"time"
)

type InstanceSummary struct {
	DeploymentID    *string             `json:"deploymentId,omitempty"`
	InstanceID      *string             `json:"instanceId,omitempty"`
	InstanceType    *InstanceTypeEnum   `json:"instanceType,omitempty"`
	LastUpdatedAt   *time.Time          `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents []LifecycleEvent    `json:"lifecycleEvents,omitempty"`
	Status          *InstanceStatusEnum `json:"status,omitempty"`
}
