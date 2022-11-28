package shared

import (
	"time"
)

// Service
// Details on a service within a cluster
type Service struct {
	CapacityProviderStrategy      []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
	ClusterArn                    *string                        `json:"clusterArn,omitempty"`
	CreatedAt                     *time.Time                     `json:"createdAt,omitempty"`
	CreatedBy                     *string                        `json:"createdBy,omitempty"`
	DeploymentConfiguration       *DeploymentConfiguration       `json:"deploymentConfiguration,omitempty"`
	DeploymentController          *DeploymentController          `json:"deploymentController,omitempty"`
	Deployments                   []Deployment                   `json:"deployments,omitempty"`
	DesiredCount                  *int64                         `json:"desiredCount,omitempty"`
	EnableEcsManagedTags          *bool                          `json:"enableECSManagedTags,omitempty"`
	EnableExecuteCommand          *bool                          `json:"enableExecuteCommand,omitempty"`
	Events                        []ServiceEvent                 `json:"events,omitempty"`
	HealthCheckGracePeriodSeconds *int64                         `json:"healthCheckGracePeriodSeconds,omitempty"`
	LaunchType                    *LaunchTypeEnum                `json:"launchType,omitempty"`
	LoadBalancers                 []LoadBalancer                 `json:"loadBalancers,omitempty"`
	NetworkConfiguration          *NetworkConfiguration          `json:"networkConfiguration,omitempty"`
	PendingCount                  *int64                         `json:"pendingCount,omitempty"`
	PlacementConstraints          []PlacementConstraint          `json:"placementConstraints,omitempty"`
	PlacementStrategy             []PlacementStrategy            `json:"placementStrategy,omitempty"`
	PlatformVersion               *string                        `json:"platformVersion,omitempty"`
	PropagateTags                 *PropagateTagsEnum             `json:"propagateTags,omitempty"`
	RoleArn                       *string                        `json:"roleArn,omitempty"`
	RunningCount                  *int64                         `json:"runningCount,omitempty"`
	SchedulingStrategy            *SchedulingStrategyEnum        `json:"schedulingStrategy,omitempty"`
	ServiceArn                    *string                        `json:"serviceArn,omitempty"`
	ServiceName                   *string                        `json:"serviceName,omitempty"`
	ServiceRegistries             []ServiceRegistry              `json:"serviceRegistries,omitempty"`
	Status                        *string                        `json:"status,omitempty"`
	Tags                          []Tag                          `json:"tags,omitempty"`
	TaskDefinition                *string                        `json:"taskDefinition,omitempty"`
	TaskSets                      []TaskSet                      `json:"taskSets,omitempty"`
}
