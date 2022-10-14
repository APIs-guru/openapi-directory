package shared

type DeploymentStyle struct {
	DeploymentOption *DeploymentOptionEnum `json:"deploymentOption,omitempty"`
	DeploymentType   *DeploymentTypeEnum   `json:"deploymentType,omitempty"`
}
