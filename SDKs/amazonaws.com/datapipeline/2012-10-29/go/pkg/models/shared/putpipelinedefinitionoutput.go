package shared

// PutPipelineDefinitionOutput
// Contains the output of PutPipelineDefinition.
type PutPipelineDefinitionOutput struct {
	Errored            bool                `json:"errored"`
	ValidationErrors   []ValidationError   `json:"validationErrors,omitempty"`
	ValidationWarnings []ValidationWarning `json:"validationWarnings,omitempty"`
}
