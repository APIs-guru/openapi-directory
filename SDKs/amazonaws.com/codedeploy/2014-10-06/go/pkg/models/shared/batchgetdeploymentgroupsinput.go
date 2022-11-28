package shared

// BatchGetDeploymentGroupsInput
// Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
type BatchGetDeploymentGroupsInput struct {
	ApplicationName      string   `json:"applicationName"`
	DeploymentGroupNames []string `json:"deploymentGroupNames"`
}
