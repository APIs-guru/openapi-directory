package shared

type GetDeploymentTargetInput struct {
	DeploymentID *string `json:"deploymentId"`
	TargetID     *string `json:"targetId"`
}
