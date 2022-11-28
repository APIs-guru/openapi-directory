package shared

import (
	"time"
)

// Deployment
// The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.
type Deployment struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
	CreatedAt                *time.Time                     `json:"createdAt,omitempty"`
	DesiredCount             *int64                         `json:"desiredCount,omitempty"`
	FailedTasks              *int64                         `json:"failedTasks,omitempty"`
	ID                       *string                        `json:"id,omitempty"`
	LaunchType               *LaunchTypeEnum                `json:"launchType,omitempty"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration,omitempty"`
	PendingCount             *int64                         `json:"pendingCount,omitempty"`
	PlatformVersion          *string                        `json:"platformVersion,omitempty"`
	RolloutState             *DeploymentRolloutStateEnum    `json:"rolloutState,omitempty"`
	RolloutStateReason       *string                        `json:"rolloutStateReason,omitempty"`
	RunningCount             *int64                         `json:"runningCount,omitempty"`
	Status                   *string                        `json:"status,omitempty"`
	TaskDefinition           *string                        `json:"taskDefinition,omitempty"`
	UpdatedAt                *time.Time                     `json:"updatedAt,omitempty"`
}
