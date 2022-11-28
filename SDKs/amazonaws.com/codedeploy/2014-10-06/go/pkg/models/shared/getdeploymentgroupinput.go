package shared

// GetDeploymentGroupInput
// Represents the input of a <code>GetDeploymentGroup</code> operation.
type GetDeploymentGroupInput struct {
	ApplicationName     string `json:"applicationName"`
	DeploymentGroupName string `json:"deploymentGroupName"`
}
