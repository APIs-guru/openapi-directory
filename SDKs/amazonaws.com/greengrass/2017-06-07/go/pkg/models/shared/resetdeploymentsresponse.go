package shared

type ResetDeploymentsResponse struct {
	DeploymentArn *string `json:"DeploymentArn"`
	DeploymentID  *string `json:"DeploymentId"`
}
