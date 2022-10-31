package shared



type DescribeInstancesOutput struct {
    Instances []Instance `json:"Instances,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

