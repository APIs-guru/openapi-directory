package shared



type PutActionRevisionInput struct {
    ActionName string `json:"actionName"`
    ActionRevision ActionRevision `json:"actionRevision"`
    PipelineName string `json:"pipelineName"`
    StageName string `json:"stageName"`
    
}

