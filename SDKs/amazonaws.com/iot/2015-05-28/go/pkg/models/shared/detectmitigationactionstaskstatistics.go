package shared

type DetectMitigationActionsTaskStatistics struct {
	ActionsExecuted *int64 `json:"actionsExecuted"`
	ActionsFailed   *int64 `json:"actionsFailed"`
	ActionsSkipped  *int64 `json:"actionsSkipped"`
}
