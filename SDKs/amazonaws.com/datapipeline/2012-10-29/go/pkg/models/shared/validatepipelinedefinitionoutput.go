package shared

// ValidatePipelineDefinitionOutput
// Contains the output of ValidatePipelineDefinition.
type ValidatePipelineDefinitionOutput struct {
	Errored            bool                `json:"errored"`
	ValidationErrors   []ValidationError   `json:"validationErrors,omitempty"`
	ValidationWarnings []ValidationWarning `json:"validationWarnings,omitempty"`
}
