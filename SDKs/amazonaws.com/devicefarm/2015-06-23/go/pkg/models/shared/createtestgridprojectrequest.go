package shared



type CreateTestGridProjectRequest struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    VpcConfig *TestGridVpcConfig `json:"vpcConfig,omitempty"`
    
}

