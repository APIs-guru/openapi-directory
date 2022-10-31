package shared



type ListAssociatedFleetsRequest struct {
    NextToken *string `json:"NextToken,omitempty"`
    StackName string `json:"StackName"`
    
}

