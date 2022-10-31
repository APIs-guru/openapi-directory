package shared



type GetWorkflowRunsRequest struct {
    IncludeGraph *bool `json:"IncludeGraph,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Name string `json:"Name"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

