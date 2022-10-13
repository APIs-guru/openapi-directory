package shared

type UpdateServiceRequest struct {
	CapacityProviderStrategy      []CapacityProviderStrategyItem `json:"capacityProviderStrategy"`
	Cluster                       *string                        `json:"cluster"`
	DeploymentConfiguration       *DeploymentConfiguration       `json:"deploymentConfiguration"`
	DesiredCount                  *int64                         `json:"desiredCount"`
	EnableExecuteCommand          *bool                          `json:"enableExecuteCommand"`
	ForceNewDeployment            *bool                          `json:"forceNewDeployment"`
	HealthCheckGracePeriodSeconds *int64                         `json:"healthCheckGracePeriodSeconds"`
	NetworkConfiguration          *NetworkConfiguration          `json:"networkConfiguration"`
	PlacementConstraints          []PlacementConstraint          `json:"placementConstraints"`
	PlacementStrategy             []PlacementStrategy            `json:"placementStrategy"`
	PlatformVersion               *string                        `json:"platformVersion"`
	Service                       string                         `json:"service"`
	TaskDefinition                *string                        `json:"taskDefinition"`
}
