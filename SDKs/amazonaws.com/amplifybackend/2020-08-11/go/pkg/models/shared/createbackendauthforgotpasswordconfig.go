package shared



type CreateBackendAuthForgotPasswordConfig struct {
    DeliveryMethod DeliveryMethodEnum `json:"DeliveryMethod"`
    EmailSettings *EmailSettings `json:"EmailSettings,omitempty"`
    SmsSettings *SmsSettings `json:"SmsSettings,omitempty"`
    
}

