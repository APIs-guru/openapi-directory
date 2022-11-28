package shared

// ListDeploymentConfigsOutput
// Represents the output of a <code>ListDeploymentConfigs</code> operation.
type ListDeploymentConfigsOutput struct {
	DeploymentConfigsList []string `json:"deploymentConfigsList,omitempty"`
	NextToken             *string  `json:"nextToken,omitempty"`
}
