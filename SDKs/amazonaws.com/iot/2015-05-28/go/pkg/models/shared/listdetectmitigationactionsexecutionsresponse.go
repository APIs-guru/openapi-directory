package shared

type ListDetectMitigationActionsExecutionsResponse struct {
	ActionsExecutions []DetectMitigationActionExecution `json:"actionsExecutions"`
	NextToken         *string                           `json:"nextToken"`
}
