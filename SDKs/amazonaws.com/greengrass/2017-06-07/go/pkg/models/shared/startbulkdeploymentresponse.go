package shared

type StartBulkDeploymentResponse struct {
	BulkDeploymentArn *string `json:"BulkDeploymentArn"`
	BulkDeploymentID  *string `json:"BulkDeploymentId"`
}
