package shared

// UpdateBackendAuthForgotPasswordConfig
// Describes the forgot password policy for authenticating into the Amplify app.
type UpdateBackendAuthForgotPasswordConfig struct {
	DeliveryMethod *DeliveryMethodEnum `json:"DeliveryMethod,omitempty"`
	EmailSettings  *EmailSettings      `json:"EmailSettings,omitempty"`
	SmsSettings    *SmsSettings        `json:"SmsSettings,omitempty"`
}
