package shared

type NotificationAction struct {
	Action              NotificationTargetActions `json:"action"`
	EmailConfigurations []EmailConfiguration      `json:"emailConfigurations"`
	SmsConfigurations   []SmsConfiguration        `json:"smsConfigurations"`
}
