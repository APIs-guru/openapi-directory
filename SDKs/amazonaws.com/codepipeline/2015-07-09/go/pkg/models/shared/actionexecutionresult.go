package shared

type ActionExecutionResult struct {
	ExternalExecutionID      *string `json:"externalExecutionId,omitempty"`
	ExternalExecutionSummary *string `json:"externalExecutionSummary,omitempty"`
	ExternalExecutionURL     *string `json:"externalExecutionUrl,omitempty"`
}
