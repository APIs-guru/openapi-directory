package shared

// GetPipelineDefinitionInput
// Contains the parameters for GetPipelineDefinition.
type GetPipelineDefinitionInput struct {
	PipelineID string  `json:"pipelineId"`
	Version    *string `json:"version,omitempty"`
}
