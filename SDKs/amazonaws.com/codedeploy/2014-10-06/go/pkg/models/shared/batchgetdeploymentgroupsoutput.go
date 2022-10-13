package shared

type BatchGetDeploymentGroupsOutput struct {
	DeploymentGroupsInfo []DeploymentGroupInfo `json:"deploymentGroupsInfo"`
	ErrorMessage         *string               `json:"errorMessage"`
}
