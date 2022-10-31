package shared



type DescribeSessionsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Sessions []Session `json:"Sessions,omitempty"`
    
}

