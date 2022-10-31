package shared



type DescribeConformancePackStatusResponse struct {
    ConformancePackStatusDetails []ConformancePackStatusDetail `json:"ConformancePackStatusDetails,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

