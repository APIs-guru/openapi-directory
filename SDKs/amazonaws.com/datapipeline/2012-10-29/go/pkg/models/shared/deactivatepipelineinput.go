package shared

type DeactivatePipelineInput struct {
	CancelActive *bool  `json:"cancelActive"`
	PipelineID   string `json:"pipelineId"`
}
