package shared

type GetPipelineDefinitionOutput struct {
	ParameterObjects []ParameterObject `json:"parameterObjects"`
	ParameterValues  []ParameterValue  `json:"parameterValues"`
	PipelineObjects  []PipelineObject  `json:"pipelineObjects"`
}
