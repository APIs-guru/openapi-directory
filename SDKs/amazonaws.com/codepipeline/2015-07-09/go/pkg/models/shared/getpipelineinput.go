package shared

// GetPipelineInput
// Represents the input of a <code>GetPipeline</code> action.
type GetPipelineInput struct {
	Name    string `json:"name"`
	Version *int64 `json:"version,omitempty"`
}
