package shared

type GetDeploymentStatusResponse struct {
	DeploymentStatus *string             `json:"DeploymentStatus,omitempty"`
	DeploymentType   *DeploymentTypeEnum `json:"DeploymentType,omitempty"`
	ErrorDetails     []ErrorDetail       `json:"ErrorDetails,omitempty"`
	ErrorMessage     *string             `json:"ErrorMessage,omitempty"`
	UpdatedAt        *string             `json:"UpdatedAt,omitempty"`
}
