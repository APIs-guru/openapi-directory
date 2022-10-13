package shared

type UpdateTestGridProjectRequest struct {
	Description *string            `json:"description"`
	Name        *string            `json:"name"`
	ProjectArn  string             `json:"projectArn"`
	VpcConfig   *TestGridVpcConfig `json:"vpcConfig"`
}
