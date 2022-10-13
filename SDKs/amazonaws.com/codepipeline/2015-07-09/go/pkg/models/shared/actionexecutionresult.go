package shared

type ActionExecutionResult struct {
	ExternalExecutionID      *string `json:"externalExecutionId"`
	ExternalExecutionSummary *string `json:"externalExecutionSummary"`
	ExternalExecutionURL     *string `json:"externalExecutionUrl"`
}
