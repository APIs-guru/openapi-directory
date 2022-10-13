package shared

import (
	"time"
)

type TaskSet struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	ClusterArn               *string                        `json:"clusterArn"`
	ComputedDesiredCount     *int64                         `json:"computedDesiredCount"`
	CreatedAt                *time.Time                     `json:"createdAt"`
	ExternalID               *string                        `json:"externalId"`
	ID                       *string                        `json:"id"`
	LaunchType               *LaunchTypeEnum                `json:"launchType"`
	LoadBalancers            []LoadBalancer                 `json:"loadBalancers"`
	NetworkConfiguration     *NetworkConfiguration          `json:"networkConfiguration"`
	PendingCount             *int64                         `json:"pendingCount"`
	PlatformVersion          *string                        `json:"platformVersion"`
	RunningCount             *int64                         `json:"runningCount"`
	Scale                    *Scale                         `json:"scale"`
	ServiceArn               *string                        `json:"serviceArn"`
	ServiceRegistries        []ServiceRegistry              `json:"serviceRegistries"`
	StabilityStatus          *StabilityStatusEnum           `json:"stabilityStatus"`
	StabilityStatusAt        *time.Time                     `json:"stabilityStatusAt"`
	StartedBy                *string                        `json:"startedBy"`
	Status                   *string                        `json:"status"`
	Tags                     []Tag                          `json:"tags"`
	TaskDefinition           *string                        `json:"taskDefinition"`
	TaskSetArn               *string                        `json:"taskSetArn"`
	UpdatedAt                *time.Time                     `json:"updatedAt"`
}
