package shared



type ListWorkflowsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Workflows []string `json:"Workflows,omitempty"`
    
}

