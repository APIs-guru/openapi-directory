package shared

type PutPipelineDefinitionInput struct {
	ParameterObjects []ParameterObject `json:"parameterObjects,omitempty"`
	ParameterValues  []ParameterValue  `json:"parameterValues,omitempty"`
	PipelineID       string            `json:"pipelineId"`
	PipelineObjects  []PipelineObject  `json:"pipelineObjects"`
}
