package shared



type ListConnectionsResponse struct {
    ConnectionSummaryList []ConnectionSummary `json:"ConnectionSummaryList"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

