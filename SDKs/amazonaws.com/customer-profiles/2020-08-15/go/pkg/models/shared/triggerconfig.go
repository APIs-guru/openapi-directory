package shared

type TriggerConfig struct {
	TriggerProperties *TriggerProperties `json:"TriggerProperties"`
	TriggerType       TriggerTypeEnum    `json:"TriggerType"`
}
