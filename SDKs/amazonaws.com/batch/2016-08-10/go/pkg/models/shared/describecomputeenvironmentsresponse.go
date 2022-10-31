package shared



type DescribeComputeEnvironmentsResponse struct {
    ComputeEnvironments []ComputeEnvironmentDetail `json:"computeEnvironments,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

