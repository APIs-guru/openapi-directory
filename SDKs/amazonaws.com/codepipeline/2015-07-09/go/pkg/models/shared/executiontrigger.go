package shared

type ExecutionTrigger struct {
	TriggerDetail *string          `json:"triggerDetail"`
	TriggerType   *TriggerTypeEnum `json:"triggerType"`
}
