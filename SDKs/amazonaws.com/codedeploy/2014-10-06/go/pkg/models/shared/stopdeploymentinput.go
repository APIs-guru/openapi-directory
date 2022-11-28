package shared

// StopDeploymentInput
//
//	Represents the input of a <code>StopDeployment</code> operation.
type StopDeploymentInput struct {
	AutoRollbackEnabled *bool  `json:"autoRollbackEnabled,omitempty"`
	DeploymentID        string `json:"deploymentId"`
}
