package shared



type CreateServiceRequest struct {
    CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Cluster *string `json:"cluster,omitempty"`
    DeploymentConfiguration *DeploymentConfiguration `json:"deploymentConfiguration,omitempty"`
    DeploymentController *DeploymentController `json:"deploymentController,omitempty"`
    DesiredCount *int64 `json:"desiredCount,omitempty"`
    EnableEcsManagedTags *bool `json:"enableECSManagedTags,omitempty"`
    EnableExecuteCommand *bool `json:"enableExecuteCommand,omitempty"`
    HealthCheckGracePeriodSeconds *int64 `json:"healthCheckGracePeriodSeconds,omitempty"`
    LaunchType *LaunchTypeEnum `json:"launchType,omitempty"`
    LoadBalancers []LoadBalancer `json:"loadBalancers,omitempty"`
    NetworkConfiguration *NetworkConfiguration `json:"networkConfiguration,omitempty"`
    PlacementConstraints []PlacementConstraint `json:"placementConstraints,omitempty"`
    PlacementStrategy []PlacementStrategy `json:"placementStrategy,omitempty"`
    PlatformVersion *string `json:"platformVersion,omitempty"`
    PropagateTags *PropagateTagsEnum `json:"propagateTags,omitempty"`
    Role *string `json:"role,omitempty"`
    SchedulingStrategy *SchedulingStrategyEnum `json:"schedulingStrategy,omitempty"`
    ServiceName string `json:"serviceName"`
    ServiceRegistries []ServiceRegistry `json:"serviceRegistries,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    TaskDefinition *string `json:"taskDefinition,omitempty"`
    
}

