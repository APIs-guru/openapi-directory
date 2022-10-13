package shared

type RemoveTagsInput struct {
	PipelineID string   `json:"pipelineId"`
	TagKeys    []string `json:"tagKeys"`
}
