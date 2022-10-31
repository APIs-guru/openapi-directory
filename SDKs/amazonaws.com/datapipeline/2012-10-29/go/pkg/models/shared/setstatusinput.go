package shared



type SetStatusInput struct {
    ObjectIds []string `json:"objectIds"`
    PipelineID string `json:"pipelineId"`
    Status string `json:"status"`
    
}

