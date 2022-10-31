package shared

type UpdateTestGridProjectRequest struct {
	Description *string            `json:"description,omitempty"`
	Name        *string            `json:"name,omitempty"`
	ProjectArn  string             `json:"projectArn"`
	VpcConfig   *TestGridVpcConfig `json:"vpcConfig,omitempty"`
}
