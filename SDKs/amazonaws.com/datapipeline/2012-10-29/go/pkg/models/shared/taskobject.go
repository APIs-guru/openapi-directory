package shared

// TaskObject
// Contains information about a pipeline task that is assigned to a task runner.
type TaskObject struct {
	AttemptID  *string                   `json:"attemptId,omitempty"`
	Objects    map[string]PipelineObject `json:"objects,omitempty"`
	PipelineID *string                   `json:"pipelineId,omitempty"`
	TaskID     *string                   `json:"taskId,omitempty"`
}
