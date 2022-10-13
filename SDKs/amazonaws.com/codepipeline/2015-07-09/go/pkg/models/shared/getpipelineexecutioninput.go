package shared

type GetPipelineExecutionInput struct {
	PipelineExecutionID string `json:"pipelineExecutionId"`
	PipelineName        string `json:"pipelineName"`
}
