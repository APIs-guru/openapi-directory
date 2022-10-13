package shared

type TriggerConfig struct {
	TriggerEvents    []TriggerEventTypeEnum `json:"triggerEvents"`
	TriggerName      *string                `json:"triggerName"`
	TriggerTargetArn *string                `json:"triggerTargetArn"`
}
