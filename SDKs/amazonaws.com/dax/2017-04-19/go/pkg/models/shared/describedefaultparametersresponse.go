package shared



type DescribeDefaultParametersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Parameters []Parameter `json:"Parameters,omitempty"`
    
}

