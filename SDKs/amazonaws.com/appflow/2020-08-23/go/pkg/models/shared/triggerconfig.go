package shared

type TriggerConfig struct {
	TriggerProperties *TriggerProperties `json:"triggerProperties,omitempty"`
	TriggerType       TriggerTypeEnum    `json:"triggerType"`
}
