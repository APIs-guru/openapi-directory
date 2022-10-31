package shared



type PipelineDescription struct {
    Description *string `json:"description,omitempty"`
    Fields []Field `json:"fields"`
    Name string `json:"name"`
    PipelineID string `json:"pipelineId"`
    Tags []Tag `json:"tags,omitempty"`
    
}

