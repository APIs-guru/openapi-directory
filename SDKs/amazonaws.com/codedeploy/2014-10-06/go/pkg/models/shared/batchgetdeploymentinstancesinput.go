package shared

// BatchGetDeploymentInstancesInput
//
//	Represents the input of a <code>BatchGetDeploymentInstances</code> operation.
type BatchGetDeploymentInstancesInput struct {
	DeploymentID string   `json:"deploymentId"`
	InstanceIds  []string `json:"instanceIds"`
}
