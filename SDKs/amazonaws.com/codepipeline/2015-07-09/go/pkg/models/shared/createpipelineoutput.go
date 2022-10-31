package shared



type CreatePipelineOutput struct {
    Pipeline *PipelineDeclaration `json:"pipeline,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

