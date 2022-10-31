package shared



type EnableStageTransitionInput struct {
    PipelineName string `json:"pipelineName"`
    StageName string `json:"stageName"`
    TransitionType StageTransitionTypeEnum `json:"transitionType"`
    
}

