package shared

// CreatePipelineOutput
// Represents the output of a <code>CreatePipeline</code> action.
type CreatePipelineOutput struct {
	Pipeline *PipelineDeclaration `json:"pipeline,omitempty"`
	Tags     []Tag                `json:"tags,omitempty"`
}
