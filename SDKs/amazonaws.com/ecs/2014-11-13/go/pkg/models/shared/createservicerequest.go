package shared

type CreateServiceRequest struct {
	CapacityProviderStrategy      []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	ClientToken                   *string                        `json:"clientToken"`
	Cluster                       *string                        `json:"cluster"`
	DeploymentConfiguration       *DeploymentConfiguration       `json:"deploymentConfiguration"`
	DeploymentController          *DeploymentController          `json:"deploymentController"`
	DesiredCount                  *int64                         `json:"desiredCount"`
	EnableEcsManagedTags          *bool                          `json:"enableECSManagedTags"`
	EnableExecuteCommand          *bool                          `json:"enableExecuteCommand"`
	HealthCheckGracePeriodSeconds *int64                         `json:"healthCheckGracePeriodSeconds"`
	LaunchType                    *LaunchTypeEnum                `json:"launchType"`
	LoadBalancers                 []LoadBalancer                 `json:"loadBalancers"`
	NetworkConfiguration          *NetworkConfiguration          `json:"networkConfiguration"`
	PlacementConstraints          []PlacementConstraint          `json:"placementConstraints"`
	PlacementStrategy             []PlacementStrategy            `json:"placementStrategy"`
	PlatformVersion               *string                        `json:"platformVersion"`
	PropagateTags                 *PropagateTagsEnum             `json:"propagateTags"`
	Role                          *string                        `json:"role"`
	SchedulingStrategy            *SchedulingStrategyEnum        `json:"schedulingStrategy"`
	ServiceName                   string                         `json:"serviceName"`
	ServiceRegistries             []ServiceRegistry              `json:"serviceRegistries"`
	Tags                          []Tag                          `json:"tags"`
	TaskDefinition                *string                        `json:"taskDefinition"`
}
