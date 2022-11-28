package shared

// TriggerConfig
// Information about notification triggers for the deployment group.
type TriggerConfig struct {
	TriggerEvents    []TriggerEventTypeEnum `json:"triggerEvents,omitempty"`
	TriggerName      *string                `json:"triggerName,omitempty"`
	TriggerTargetArn *string                `json:"triggerTargetArn,omitempty"`
}
