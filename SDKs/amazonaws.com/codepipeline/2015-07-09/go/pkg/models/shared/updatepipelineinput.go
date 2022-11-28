package shared

// UpdatePipelineInput
// Represents the input of an <code>UpdatePipeline</code> action.
type UpdatePipelineInput struct {
	Pipeline PipelineDeclaration `json:"pipeline"`
}
