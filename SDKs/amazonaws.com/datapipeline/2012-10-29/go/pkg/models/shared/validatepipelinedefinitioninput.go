package shared

// ValidatePipelineDefinitionInput
// Contains the parameters for ValidatePipelineDefinition.
type ValidatePipelineDefinitionInput struct {
	ParameterObjects []ParameterObject `json:"parameterObjects,omitempty"`
	ParameterValues  []ParameterValue  `json:"parameterValues,omitempty"`
	PipelineID       string            `json:"pipelineId"`
	PipelineObjects  []PipelineObject  `json:"pipelineObjects"`
}
