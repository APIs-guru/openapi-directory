package shared

type SmsMfaConfigType struct {
	SmsAuthenticationMessage *string               `json:"SmsAuthenticationMessage,omitempty"`
	SmsConfiguration         *SmsConfigurationType `json:"SmsConfiguration,omitempty"`
}
