package shared

type ValidatePipelineDefinitionInput struct {
	ParameterObjects []ParameterObject `json:"parameterObjects"`
	ParameterValues  []ParameterValue  `json:"parameterValues"`
	PipelineID       string            `json:"pipelineId"`
	PipelineObjects  []PipelineObject  `json:"pipelineObjects"`
}
