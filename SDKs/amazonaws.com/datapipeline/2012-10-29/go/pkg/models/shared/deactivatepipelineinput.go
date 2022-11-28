package shared

// DeactivatePipelineInput
// Contains the parameters for DeactivatePipeline.
type DeactivatePipelineInput struct {
	CancelActive *bool  `json:"cancelActive,omitempty"`
	PipelineID   string `json:"pipelineId"`
}
