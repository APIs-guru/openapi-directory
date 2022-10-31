package shared



type GetPipelineInput struct {
    Name string `json:"name"`
    Version *int64 `json:"version,omitempty"`
    
}

