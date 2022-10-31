package shared



type ListActionsResponse struct {
    Actions []ActionSummary `json:"actions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

