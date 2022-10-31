package shared



type RetryStageExecutionInput struct {
    PipelineExecutionID string `json:"pipelineExecutionId"`
    PipelineName string `json:"pipelineName"`
    RetryMode StageRetryModeEnum `json:"retryMode"`
    StageName string `json:"stageName"`
    
}

