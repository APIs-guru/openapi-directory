package shared



type PipelineExecution struct {
    ArtifactRevisions []ArtifactRevision `json:"artifactRevisions,omitempty"`
    PipelineExecutionID *string `json:"pipelineExecutionId,omitempty"`
    PipelineName *string `json:"pipelineName,omitempty"`
    PipelineVersion *int64 `json:"pipelineVersion,omitempty"`
    Status *PipelineExecutionStatusEnum `json:"status,omitempty"`
    StatusSummary *string `json:"statusSummary,omitempty"`
    
}

