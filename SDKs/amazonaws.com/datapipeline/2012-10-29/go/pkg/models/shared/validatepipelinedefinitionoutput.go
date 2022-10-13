package shared

type ValidatePipelineDefinitionOutput struct {
	Errored            bool                `json:"errored"`
	ValidationErrors   []ValidationError   `json:"validationErrors"`
	ValidationWarnings []ValidationWarning `json:"validationWarnings"`
}
