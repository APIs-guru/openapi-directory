package shared



type ListActionExecutionsInput struct {
    Filter *ActionExecutionFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PipelineName string `json:"pipelineName"`
    
}

