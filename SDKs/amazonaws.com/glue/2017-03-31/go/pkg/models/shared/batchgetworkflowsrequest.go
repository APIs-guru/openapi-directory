package shared



type BatchGetWorkflowsRequest struct {
    IncludeGraph *bool `json:"IncludeGraph,omitempty"`
    Names []string `json:"Names"`
    
}

