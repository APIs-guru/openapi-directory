package shared

import (
	"time"
)

type LambdaTarget struct {
	DeploymentID       *string             `json:"deploymentId"`
	LambdaFunctionInfo *LambdaFunctionInfo `json:"lambdaFunctionInfo"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt"`
	LifecycleEvents    []LifecycleEvent    `json:"lifecycleEvents"`
	Status             *TargetStatusEnum   `json:"status"`
	TargetArn          *string             `json:"targetArn"`
	TargetID           *string             `json:"targetId"`
}
