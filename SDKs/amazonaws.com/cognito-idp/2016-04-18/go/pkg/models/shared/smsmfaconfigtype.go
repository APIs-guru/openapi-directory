package shared

// SmsMfaConfigType
// The SMS text message multi-factor authentication (MFA) configuration type.
type SmsMfaConfigType struct {
	SmsAuthenticationMessage *string               `json:"SmsAuthenticationMessage,omitempty"`
	SmsConfiguration         *SmsConfigurationType `json:"SmsConfiguration,omitempty"`
}
