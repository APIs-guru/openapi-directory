package shared

type TaskObject struct {
	AttemptID  *string                   `json:"attemptId"`
	Objects    map[string]PipelineObject `json:"objects"`
	PipelineID *string                   `json:"pipelineId"`
	TaskID     *string                   `json:"taskId"`
}
