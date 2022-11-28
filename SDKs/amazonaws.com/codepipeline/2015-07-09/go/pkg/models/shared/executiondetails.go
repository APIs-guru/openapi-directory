package shared

// ExecutionDetails
// The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
type ExecutionDetails struct {
	ExternalExecutionID *string `json:"externalExecutionId,omitempty"`
	PercentComplete     *int64  `json:"percentComplete,omitempty"`
	Summary             *string `json:"summary,omitempty"`
}
