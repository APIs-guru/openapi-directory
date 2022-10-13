package shared

import (
	"time"
)

type Service struct {
	CapacityProviderStrategy      []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	ClusterArn                    *string                        `json:"clusterArn"`
	CreatedAt                     *time.Time                     `json:"createdAt"`
	CreatedBy                     *string                        `json:"createdBy"`
	DeploymentConfiguration       *DeploymentConfiguration       `json:"deploymentConfiguration"`
	DeploymentController          *DeploymentController          `json:"deploymentController"`
	Deployments                   []Deployment                   `json:"deployments"`
	DesiredCount                  *int64                         `json:"desiredCount"`
	EnableEcsManagedTags          *bool                          `json:"enableECSManagedTags"`
	EnableExecuteCommand          *bool                          `json:"enableExecuteCommand"`
	Events                        []ServiceEvent                 `json:"events"`
	HealthCheckGracePeriodSeconds *int64                         `json:"healthCheckGracePeriodSeconds"`
	LaunchType                    *LaunchTypeEnum                `json:"launchType"`
	LoadBalancers                 []LoadBalancer                 `json:"loadBalancers"`
	NetworkConfiguration          *NetworkConfiguration          `json:"networkConfiguration"`
	PendingCount                  *int64                         `json:"pendingCount"`
	PlacementConstraints          []PlacementConstraint          `json:"placementConstraints"`
	PlacementStrategy             []PlacementStrategy            `json:"placementStrategy"`
	PlatformVersion               *string                        `json:"platformVersion"`
	PropagateTags                 *PropagateTagsEnum             `json:"propagateTags"`
	RoleArn                       *string                        `json:"roleArn"`
	RunningCount                  *int64                         `json:"runningCount"`
	SchedulingStrategy            *SchedulingStrategyEnum        `json:"schedulingStrategy"`
	ServiceArn                    *string                        `json:"serviceArn"`
	ServiceName                   *string                        `json:"serviceName"`
	ServiceRegistries             []ServiceRegistry              `json:"serviceRegistries"`
	Status                        *string                        `json:"status"`
	Tags                          []Tag                          `json:"tags"`
	TaskDefinition                *string                        `json:"taskDefinition"`
	TaskSets                      []TaskSet                      `json:"taskSets"`
}
