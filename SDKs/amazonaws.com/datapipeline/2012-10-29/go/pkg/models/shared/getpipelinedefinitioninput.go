package shared



type GetPipelineDefinitionInput struct {
    PipelineID string `json:"pipelineId"`
    Version *string `json:"version,omitempty"`
    
}

