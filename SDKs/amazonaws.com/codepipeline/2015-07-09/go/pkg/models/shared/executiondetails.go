package shared

type ExecutionDetails struct {
	ExternalExecutionID *string `json:"externalExecutionId,omitempty"`
	PercentComplete     *int64  `json:"percentComplete,omitempty"`
	Summary             *string `json:"summary,omitempty"`
}
