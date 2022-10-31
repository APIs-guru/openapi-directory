package shared



type ListTestGridSessionActionsResult struct {
    Actions []TestGridSessionAction `json:"actions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

