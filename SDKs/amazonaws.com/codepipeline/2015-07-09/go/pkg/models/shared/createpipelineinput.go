package shared

// CreatePipelineInput
// Represents the input of a <code>CreatePipeline</code> action.
type CreatePipelineInput struct {
	Pipeline PipelineDeclaration `json:"pipeline"`
	Tags     []Tag               `json:"tags,omitempty"`
}
