package shared

type BulkDeploymentResult struct {
	CreatedAt        *string             `json:"CreatedAt"`
	DeploymentArn    *string             `json:"DeploymentArn"`
	DeploymentID     *string             `json:"DeploymentId"`
	DeploymentStatus *string             `json:"DeploymentStatus"`
	DeploymentType   *DeploymentTypeEnum `json:"DeploymentType"`
	ErrorDetails     []ErrorDetail       `json:"ErrorDetails"`
	ErrorMessage     *string             `json:"ErrorMessage"`
	GroupArn         *string             `json:"GroupArn"`
}
