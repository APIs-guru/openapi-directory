package shared

// TriggerConfig
//
//	The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
type TriggerConfig struct {
	TriggerProperties *TriggerProperties `json:"triggerProperties,omitempty"`
	TriggerType       TriggerTypeEnum    `json:"triggerType"`
}
