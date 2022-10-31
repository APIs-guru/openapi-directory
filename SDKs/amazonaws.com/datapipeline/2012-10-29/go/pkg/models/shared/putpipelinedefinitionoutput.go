package shared



type PutPipelineDefinitionOutput struct {
    Errored bool `json:"errored"`
    ValidationErrors []ValidationError `json:"validationErrors,omitempty"`
    ValidationWarnings []ValidationWarning `json:"validationWarnings,omitempty"`
    
}

