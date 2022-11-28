package shared

// RetryStageExecutionInput
// Represents the input of a <code>RetryStageExecution</code> action.
type RetryStageExecutionInput struct {
	PipelineExecutionID string             `json:"pipelineExecutionId"`
	PipelineName        string             `json:"pipelineName"`
	RetryMode           StageRetryModeEnum `json:"retryMode"`
	StageName           string             `json:"stageName"`
}
