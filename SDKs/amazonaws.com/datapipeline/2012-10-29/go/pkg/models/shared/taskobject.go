package shared

type TaskObject struct {
	AttemptID  *string                   `json:"attemptId,omitempty"`
	Objects    map[string]PipelineObject `json:"objects,omitempty"`
	PipelineID *string                   `json:"pipelineId,omitempty"`
	TaskID     *string                   `json:"taskId,omitempty"`
}
