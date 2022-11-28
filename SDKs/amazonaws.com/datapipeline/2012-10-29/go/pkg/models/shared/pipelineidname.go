package shared

// PipelineIDName
// Contains the name and identifier of a pipeline.
type PipelineIDName struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}
