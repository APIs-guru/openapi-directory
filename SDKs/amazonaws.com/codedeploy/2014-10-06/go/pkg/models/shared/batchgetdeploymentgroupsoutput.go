package shared

// BatchGetDeploymentGroupsOutput
// Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
type BatchGetDeploymentGroupsOutput struct {
	DeploymentGroupsInfo []DeploymentGroupInfo `json:"deploymentGroupsInfo,omitempty"`
	ErrorMessage         *string               `json:"errorMessage,omitempty"`
}
