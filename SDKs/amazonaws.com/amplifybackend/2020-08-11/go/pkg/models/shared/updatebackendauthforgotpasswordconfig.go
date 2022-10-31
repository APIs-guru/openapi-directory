package shared



type UpdateBackendAuthForgotPasswordConfig struct {
    DeliveryMethod *DeliveryMethodEnum `json:"DeliveryMethod,omitempty"`
    EmailSettings *EmailSettings `json:"EmailSettings,omitempty"`
    SmsSettings *SmsSettings `json:"SmsSettings,omitempty"`
    
}

