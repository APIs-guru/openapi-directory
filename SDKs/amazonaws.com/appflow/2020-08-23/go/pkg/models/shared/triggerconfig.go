package shared

type TriggerConfig struct {
	TriggerProperties *TriggerProperties `json:"triggerProperties"`
	TriggerType       TriggerTypeEnum    `json:"triggerType"`
}
