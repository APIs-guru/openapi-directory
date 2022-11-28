package shared

// GetPipelineExecutionInput
// Represents the input of a <code>GetPipelineExecution</code> action.
type GetPipelineExecutionInput struct {
	PipelineExecutionID string `json:"pipelineExecutionId"`
	PipelineName        string `json:"pipelineName"`
}
