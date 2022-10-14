package shared

type BatchGetDeploymentTargetsInput struct {
	DeploymentID *string  `json:"deploymentId,omitempty"`
	TargetIds    []string `json:"targetIds,omitempty"`
}
