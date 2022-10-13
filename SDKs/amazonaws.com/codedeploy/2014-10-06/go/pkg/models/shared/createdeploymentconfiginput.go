package shared

type CreateDeploymentConfigInput struct {
	ComputePlatform      *ComputePlatformEnum  `json:"computePlatform"`
	DeploymentConfigName string                `json:"deploymentConfigName"`
	MinimumHealthyHosts  *MinimumHealthyHosts  `json:"minimumHealthyHosts"`
	TrafficRoutingConfig *TrafficRoutingConfig `json:"trafficRoutingConfig"`
}
