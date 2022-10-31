package shared



type CreatePipelineInput struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Tags []Tag `json:"tags,omitempty"`
    UniqueID string `json:"uniqueId"`
    
}

