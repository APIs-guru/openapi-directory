package shared

// ActionExecutionResult
// Execution result information, such as the external execution ID.
type ActionExecutionResult struct {
	ExternalExecutionID      *string `json:"externalExecutionId,omitempty"`
	ExternalExecutionSummary *string `json:"externalExecutionSummary,omitempty"`
	ExternalExecutionURL     *string `json:"externalExecutionUrl,omitempty"`
}
