package shared

type CreateDeploymentResponse struct {
	DeploymentArn *string `json:"DeploymentArn"`
	DeploymentID  *string `json:"DeploymentId"`
}
