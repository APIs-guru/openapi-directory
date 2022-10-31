package shared



type QueryObjectsInput struct {
    Limit *int64 `json:"limit,omitempty"`
    Marker *string `json:"marker,omitempty"`
    PipelineID string `json:"pipelineId"`
    Query *Query `json:"query,omitempty"`
    Sphere string `json:"sphere"`
    
}

