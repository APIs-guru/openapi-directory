package shared

// RemoveTagsInput
// Contains the parameters for RemoveTags.
type RemoveTagsInput struct {
	PipelineID string   `json:"pipelineId"`
	TagKeys    []string `json:"tagKeys"`
}
