package shared

type PipelineExecution struct {
	ArtifactRevisions   []ArtifactRevision           `json:"artifactRevisions"`
	PipelineExecutionID *string                      `json:"pipelineExecutionId"`
	PipelineName        *string                      `json:"pipelineName"`
	PipelineVersion     *int64                       `json:"pipelineVersion"`
	Status              *PipelineExecutionStatusEnum `json:"status"`
	StatusSummary       *string                      `json:"statusSummary"`
}
