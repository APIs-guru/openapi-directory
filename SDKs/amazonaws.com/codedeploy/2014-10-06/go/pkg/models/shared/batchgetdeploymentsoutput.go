package shared

// BatchGetDeploymentsOutput
//
//	Represents the output of a <code>BatchGetDeployments</code> operation.
type BatchGetDeploymentsOutput struct {
	DeploymentsInfo []DeploymentInfo `json:"deploymentsInfo,omitempty"`
}
