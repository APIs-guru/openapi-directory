package shared



type ListPipelinesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Pipelines []PipelineSummary `json:"pipelines,omitempty"`
    
}

