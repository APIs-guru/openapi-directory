package shared

// GetPipelineOutput
// Represents the output of a <code>GetPipeline</code> action.
type GetPipelineOutput struct {
	Metadata *PipelineMetadata    `json:"metadata,omitempty"`
	Pipeline *PipelineDeclaration `json:"pipeline,omitempty"`
}
