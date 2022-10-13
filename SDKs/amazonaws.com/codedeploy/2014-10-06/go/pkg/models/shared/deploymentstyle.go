package shared

type DeploymentStyle struct {
	DeploymentOption *DeploymentOptionEnum `json:"deploymentOption"`
	DeploymentType   *DeploymentTypeEnum   `json:"deploymentType"`
}
