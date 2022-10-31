package shared

type StageExecution struct {
	PipelineExecutionID string                   `json:"pipelineExecutionId"`
	Status              StageExecutionStatusEnum `json:"status"`
}
