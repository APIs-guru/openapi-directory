package shared

type ContinueDeploymentInput struct {
	DeploymentID       *string                 `json:"deploymentId"`
	DeploymentWaitType *DeploymentWaitTypeEnum `json:"deploymentWaitType"`
}
