package shared

type BatchGetDeploymentGroupsOutput struct {
	DeploymentGroupsInfo []DeploymentGroupInfo `json:"deploymentGroupsInfo,omitempty"`
	ErrorMessage         *string               `json:"errorMessage,omitempty"`
}
