package shared

type ExecutionDetails struct {
	ExternalExecutionID *string `json:"externalExecutionId"`
	PercentComplete     *int64  `json:"percentComplete"`
	Summary             *string `json:"summary"`
}
