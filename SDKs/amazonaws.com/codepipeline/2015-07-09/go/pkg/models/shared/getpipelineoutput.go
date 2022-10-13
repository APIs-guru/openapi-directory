package shared

type GetPipelineOutput struct {
	Metadata *PipelineMetadata    `json:"metadata"`
	Pipeline *PipelineDeclaration `json:"pipeline"`
}
