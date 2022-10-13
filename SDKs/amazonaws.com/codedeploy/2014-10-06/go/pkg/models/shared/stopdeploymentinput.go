package shared

type StopDeploymentInput struct {
	AutoRollbackEnabled *bool  `json:"autoRollbackEnabled"`
	DeploymentID        string `json:"deploymentId"`
}
