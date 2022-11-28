package shared

// BatchGetDeploymentsInput
//
//	Represents the input of a <code>BatchGetDeployments</code> operation.
type BatchGetDeploymentsInput struct {
	DeploymentIds []string `json:"deploymentIds"`
}
