package shared

// ListDeploymentInstancesOutput
// Represents the output of a <code>ListDeploymentInstances</code> operation.
type ListDeploymentInstancesOutput struct {
	InstancesList []string `json:"instancesList,omitempty"`
	NextToken     *string  `json:"nextToken,omitempty"`
}
