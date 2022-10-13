package shared

type CreateDeploymentResponse struct {
	DeploymentID *string `json:"deploymentId"`
	IotJobArn    *string `json:"iotJobArn"`
	IotJobID     *string `json:"iotJobId"`
}
