package shared

// AddTagsInput
// Contains the parameters for AddTags.
type AddTagsInput struct {
	PipelineID string `json:"pipelineId"`
	Tags       []Tag  `json:"tags"`
}
