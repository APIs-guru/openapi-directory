package shared

// ExecutionTrigger
// The interaction or event that started a pipeline execution.
type ExecutionTrigger struct {
	TriggerDetail *string          `json:"triggerDetail,omitempty"`
	TriggerType   *TriggerTypeEnum `json:"triggerType,omitempty"`
}
