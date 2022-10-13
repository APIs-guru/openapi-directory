package shared

type PipelineContext struct {
	Action              *ActionContext `json:"action"`
	PipelineArn         *string        `json:"pipelineArn"`
	PipelineExecutionID *string        `json:"pipelineExecutionId"`
	PipelineName        *string        `json:"pipelineName"`
	Stage               *StageContext  `json:"stage"`
}
