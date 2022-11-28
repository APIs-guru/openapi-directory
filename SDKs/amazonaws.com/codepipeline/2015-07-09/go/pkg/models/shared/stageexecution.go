package shared

// StageExecution
// Represents information about the run of a stage.
type StageExecution struct {
	PipelineExecutionID string                   `json:"pipelineExecutionId"`
	Status              StageExecutionStatusEnum `json:"status"`
}
