package shared

import (
	"time"
)

type InstanceSummary struct {
	DeploymentID    *string             `json:"deploymentId"`
	InstanceID      *string             `json:"instanceId"`
	InstanceType    *InstanceTypeEnum   `json:"instanceType"`
	LastUpdatedAt   *time.Time          `json:"lastUpdatedAt"`
	LifecycleEvents []LifecycleEvent    `json:"lifecycleEvents"`
	Status          *InstanceStatusEnum `json:"status"`
}
