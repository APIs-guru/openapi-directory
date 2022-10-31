package shared



type DescribeObjectsOutput struct {
    HasMoreResults *bool `json:"hasMoreResults,omitempty"`
    Marker *string `json:"marker,omitempty"`
    PipelineObjects []PipelineObject `json:"pipelineObjects"`
    
}

