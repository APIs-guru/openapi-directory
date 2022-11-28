package shared

// CreateBackendAuthForgotPasswordConfig
// Describes the forgot password policy for authenticating into the Amplify app.
type CreateBackendAuthForgotPasswordConfig struct {
	DeliveryMethod DeliveryMethodEnum `json:"DeliveryMethod"`
	EmailSettings  *EmailSettings     `json:"EmailSettings,omitempty"`
	SmsSettings    *SmsSettings       `json:"SmsSettings,omitempty"`
}
