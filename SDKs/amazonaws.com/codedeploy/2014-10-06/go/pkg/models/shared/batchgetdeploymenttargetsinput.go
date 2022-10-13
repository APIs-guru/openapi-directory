package shared

type BatchGetDeploymentTargetsInput struct {
	DeploymentID *string  `json:"deploymentId"`
	TargetIds    []string `json:"targetIds"`
}
