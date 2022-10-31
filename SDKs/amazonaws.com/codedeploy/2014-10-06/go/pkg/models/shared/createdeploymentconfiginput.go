package shared



type CreateDeploymentConfigInput struct {
    ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
    DeploymentConfigName string `json:"deploymentConfigName"`
    MinimumHealthyHosts *MinimumHealthyHosts `json:"minimumHealthyHosts,omitempty"`
    TrafficRoutingConfig *TrafficRoutingConfig `json:"trafficRoutingConfig,omitempty"`
    
}

