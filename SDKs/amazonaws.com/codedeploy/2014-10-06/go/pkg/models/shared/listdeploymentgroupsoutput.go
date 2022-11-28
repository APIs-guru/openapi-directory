package shared

// ListDeploymentGroupsOutput
// Represents the output of a <code>ListDeploymentGroups</code> operation.
type ListDeploymentGroupsOutput struct {
	ApplicationName  *string  `json:"applicationName,omitempty"`
	DeploymentGroups []string `json:"deploymentGroups,omitempty"`
	NextToken        *string  `json:"nextToken,omitempty"`
}
