package shared



type ListOperationsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OperationSummaryList []OperationSummary `json:"OperationSummaryList,omitempty"`
    
}

