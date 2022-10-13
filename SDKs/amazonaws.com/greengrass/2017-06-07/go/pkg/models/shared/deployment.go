package shared

type Deployment struct {
	CreatedAt      *string             `json:"CreatedAt"`
	DeploymentArn  *string             `json:"DeploymentArn"`
	DeploymentID   *string             `json:"DeploymentId"`
	DeploymentType *DeploymentTypeEnum `json:"DeploymentType"`
	GroupArn       *string             `json:"GroupArn"`
}
