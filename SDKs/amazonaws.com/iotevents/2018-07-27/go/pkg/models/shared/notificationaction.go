package shared

// NotificationAction
// Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
type NotificationAction struct {
	Action              NotificationTargetActions `json:"action"`
	EmailConfigurations []EmailConfiguration      `json:"emailConfigurations,omitempty"`
	SmsConfigurations   []SmsConfiguration        `json:"smsConfigurations,omitempty"`
}
