package shared



type DescribeRemediationExceptionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RemediationExceptions []RemediationException `json:"RemediationExceptions,omitempty"`
    
}

