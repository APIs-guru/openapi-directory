package shared



type GetWorkflowRequest struct {
    IncludeGraph *bool `json:"IncludeGraph,omitempty"`
    Name string `json:"Name"`
    
}

