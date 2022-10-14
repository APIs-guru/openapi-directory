package shared

import (
	"time"
)

type LambdaTarget struct {
	DeploymentID       *string             `json:"deploymentId,omitempty"`
	LambdaFunctionInfo *LambdaFunctionInfo `json:"lambdaFunctionInfo,omitempty"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt,omitempty"`
	LifecycleEvents    []LifecycleEvent    `json:"lifecycleEvents,omitempty"`
	Status             *TargetStatusEnum   `json:"status,omitempty"`
	TargetArn          *string             `json:"targetArn,omitempty"`
	TargetID           *string             `json:"targetId,omitempty"`
}
