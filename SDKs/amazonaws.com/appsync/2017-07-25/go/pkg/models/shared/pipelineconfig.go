package shared

// PipelineConfig
// The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
type PipelineConfig struct {
	Functions []string `json:"functions,omitempty"`
}
