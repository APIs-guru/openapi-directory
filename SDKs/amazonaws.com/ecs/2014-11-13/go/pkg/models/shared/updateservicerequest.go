package shared

type UpdateServiceRequest struct {
	CapacityProviderStrategy      []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
	Cluster                       *string                        `json:"cluster,omitempty"`
	DeploymentConfiguration       *DeploymentConfiguration       `json:"deploymentConfiguration,omitempty"`
	DesiredCount                  *int64                         `json:"desiredCount,omitempty"`
	EnableExecuteCommand          *bool                          `json:"enableExecuteCommand,omitempty"`
	ForceNewDeployment            *bool                          `json:"forceNewDeployment,omitempty"`
	HealthCheckGracePeriodSeconds *int64                         `json:"healthCheckGracePeriodSeconds,omitempty"`
	NetworkConfiguration          *NetworkConfiguration          `json:"networkConfiguration,omitempty"`
	PlacementConstraints          []PlacementConstraint          `json:"placementConstraints,omitempty"`
	PlacementStrategy             []PlacementStrategy            `json:"placementStrategy,omitempty"`
	PlatformVersion               *string                        `json:"platformVersion,omitempty"`
	Service                       string                         `json:"service"`
	TaskDefinition                *string                        `json:"taskDefinition,omitempty"`
}
