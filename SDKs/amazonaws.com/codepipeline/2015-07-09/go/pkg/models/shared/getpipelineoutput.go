package shared

type GetPipelineOutput struct {
	Metadata *PipelineMetadata    `json:"metadata,omitempty"`
	Pipeline *PipelineDeclaration `json:"pipeline,omitempty"`
}
