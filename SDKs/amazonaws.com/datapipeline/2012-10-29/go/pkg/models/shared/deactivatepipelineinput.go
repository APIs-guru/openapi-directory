package shared

type DeactivatePipelineInput struct {
	CancelActive *bool  `json:"cancelActive,omitempty"`
	PipelineID   string `json:"pipelineId"`
}
