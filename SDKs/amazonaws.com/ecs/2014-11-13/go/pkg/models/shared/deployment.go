package shared

import (
	"time"
)

type Deployment struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	CreatedAt                *time.Time                     `json:"createdAt"`
	DesiredCount             *int64                         `json:"desiredCount"`
	FailedTasks              *int64                         `json:"failedTasks"`
	ID                       *string                        `json:"id"`
	LaunchType               *LaunchTypeEnum                `json:"launchType"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration"`
	PendingCount             *int64                         `json:"pendingCount"`
	PlatformVersion          *string                        `json:"platformVersion"`
	RolloutState             *DeploymentRolloutStateEnum    `json:"rolloutState"`
	RolloutStateReason       *string                        `json:"rolloutStateReason"`
	RunningCount             *int64                         `json:"runningCount"`
	Status                   *string                        `json:"status"`
	TaskDefinition           *string                        `json:"taskDefinition"`
	UpdatedAt                *time.Time                     `json:"updatedAt"`
}
