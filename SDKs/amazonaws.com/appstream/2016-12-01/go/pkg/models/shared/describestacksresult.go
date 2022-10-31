package shared



type DescribeStacksResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Stacks []Stack `json:"Stacks,omitempty"`
    
}

