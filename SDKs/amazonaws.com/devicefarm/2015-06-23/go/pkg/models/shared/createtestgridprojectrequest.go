package shared

type CreateTestGridProjectRequest struct {
	Description *string            `json:"description"`
	Name        string             `json:"name"`
	VpcConfig   *TestGridVpcConfig `json:"vpcConfig"`
}
