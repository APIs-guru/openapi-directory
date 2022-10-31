package shared



type PipelineContext struct {
    Action *ActionContext `json:"action,omitempty"`
    PipelineArn *string `json:"pipelineArn,omitempty"`
    PipelineExecutionID *string `json:"pipelineExecutionId,omitempty"`
    PipelineName *string `json:"pipelineName,omitempty"`
    Stage *StageContext `json:"stage,omitempty"`
    
}

