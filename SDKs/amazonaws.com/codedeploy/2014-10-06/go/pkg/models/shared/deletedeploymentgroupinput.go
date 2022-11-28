package shared

// DeleteDeploymentGroupInput
// Represents the input of a <code>DeleteDeploymentGroup</code> operation.
type DeleteDeploymentGroupInput struct {
	ApplicationName     string `json:"applicationName"`
	DeploymentGroupName string `json:"deploymentGroupName"`
}
