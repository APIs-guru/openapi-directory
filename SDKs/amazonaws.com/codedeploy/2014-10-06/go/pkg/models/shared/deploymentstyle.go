package shared

// DeploymentStyle
// Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
type DeploymentStyle struct {
	DeploymentOption *DeploymentOptionEnum `json:"deploymentOption,omitempty"`
	DeploymentType   *DeploymentTypeEnum   `json:"deploymentType,omitempty"`
}
