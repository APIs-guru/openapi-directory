package shared



type NotificationAction struct {
    Action NotificationTargetActions `json:"action"`
    EmailConfigurations []EmailConfiguration `json:"emailConfigurations,omitempty"`
    SmsConfigurations []SmsConfiguration `json:"smsConfigurations,omitempty"`
    
}

