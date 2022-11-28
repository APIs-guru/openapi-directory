package shared

// Deployment
// Information about a deployment.
type Deployment struct {
	CreatedAt      *string             `json:"CreatedAt,omitempty"`
	DeploymentArn  *string             `json:"DeploymentArn,omitempty"`
	DeploymentID   *string             `json:"DeploymentId,omitempty"`
	DeploymentType *DeploymentTypeEnum `json:"DeploymentType,omitempty"`
	GroupArn       *string             `json:"GroupArn,omitempty"`
}
