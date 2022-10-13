package shared

type GetDeploymentStatusResponse struct {
	DeploymentStatus *string             `json:"DeploymentStatus"`
	DeploymentType   *DeploymentTypeEnum `json:"DeploymentType"`
	ErrorDetails     []ErrorDetail       `json:"ErrorDetails"`
	ErrorMessage     *string             `json:"ErrorMessage"`
	UpdatedAt        *string             `json:"UpdatedAt"`
}
