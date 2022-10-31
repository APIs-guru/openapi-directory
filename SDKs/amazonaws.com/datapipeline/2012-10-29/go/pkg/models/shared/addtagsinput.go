package shared



type AddTagsInput struct {
    PipelineID string `json:"pipelineId"`
    Tags []Tag `json:"tags"`
    
}

