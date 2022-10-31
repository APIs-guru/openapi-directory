package shared

type ExecutionTrigger struct {
	TriggerDetail *string          `json:"triggerDetail,omitempty"`
	TriggerType   *TriggerTypeEnum `json:"triggerType,omitempty"`
}
