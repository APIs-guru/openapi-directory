package shared

// BulkDeploymentResult
// Information about an individual group deployment in a bulk deployment operation.
type BulkDeploymentResult struct {
	CreatedAt        *string             `json:"CreatedAt,omitempty"`
	DeploymentArn    *string             `json:"DeploymentArn,omitempty"`
	DeploymentID     *string             `json:"DeploymentId,omitempty"`
	DeploymentStatus *string             `json:"DeploymentStatus,omitempty"`
	DeploymentType   *DeploymentTypeEnum `json:"DeploymentType,omitempty"`
	ErrorDetails     []ErrorDetail       `json:"ErrorDetails,omitempty"`
	ErrorMessage     *string             `json:"ErrorMessage,omitempty"`
	GroupArn         *string             `json:"GroupArn,omitempty"`
}
