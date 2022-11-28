package shared

// ListDeploymentGroupsInput
// Represents the input of a <code>ListDeploymentGroups</code> operation.
type ListDeploymentGroupsInput struct {
	ApplicationName string  `json:"applicationName"`
	NextToken       *string `json:"nextToken,omitempty"`
}
