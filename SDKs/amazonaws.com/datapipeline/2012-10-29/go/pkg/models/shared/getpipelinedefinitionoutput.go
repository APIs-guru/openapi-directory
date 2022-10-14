package shared

type GetPipelineDefinitionOutput struct {
	ParameterObjects []ParameterObject `json:"parameterObjects,omitempty"`
	ParameterValues  []ParameterValue  `json:"parameterValues,omitempty"`
	PipelineObjects  []PipelineObject  `json:"pipelineObjects,omitempty"`
}
