package shared

type StopPipelineExecutionInput struct {
	Abandon             *bool   `json:"abandon,omitempty"`
	PipelineExecutionID string  `json:"pipelineExecutionId"`
	PipelineName        string  `json:"pipelineName"`
	Reason              *string `json:"reason,omitempty"`
}
