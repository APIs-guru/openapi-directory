package shared

// GetDeploymentInstanceInput
//
//	Represents the input of a <code>GetDeploymentInstance</code> operation.
type GetDeploymentInstanceInput struct {
	DeploymentID string `json:"deploymentId"`
	InstanceID   string `json:"instanceId"`
}
