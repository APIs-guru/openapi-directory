package shared

type StopPipelineExecutionInput struct {
	Abandon             *bool   `json:"abandon"`
	PipelineExecutionID string  `json:"pipelineExecutionId"`
	PipelineName        string  `json:"pipelineName"`
	Reason              *string `json:"reason"`
}
