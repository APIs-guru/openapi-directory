package shared

// ListDeploymentsOutput
// Represents the output of a <code>ListDeployments</code> operation.
type ListDeploymentsOutput struct {
	Deployments []string `json:"deployments,omitempty"`
	NextToken   *string  `json:"nextToken,omitempty"`
}
