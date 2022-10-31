package shared



type ListPipelineExecutionsInput struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PipelineName string `json:"pipelineName"`
    
}

