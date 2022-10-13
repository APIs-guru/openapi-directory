package shared

type UpdateBackendAuthForgotPasswordConfig struct {
	DeliveryMethod *DeliveryMethodEnum `json:"DeliveryMethod"`
	EmailSettings  *EmailSettings      `json:"EmailSettings"`
	SmsSettings    *SmsSettings        `json:"SmsSettings"`
}
