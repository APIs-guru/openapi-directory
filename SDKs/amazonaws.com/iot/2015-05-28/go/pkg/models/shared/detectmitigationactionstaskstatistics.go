package shared



type DetectMitigationActionsTaskStatistics struct {
    ActionsExecuted *int64 `json:"actionsExecuted,omitempty"`
    ActionsFailed *int64 `json:"actionsFailed,omitempty"`
    ActionsSkipped *int64 `json:"actionsSkipped,omitempty"`
    
}

