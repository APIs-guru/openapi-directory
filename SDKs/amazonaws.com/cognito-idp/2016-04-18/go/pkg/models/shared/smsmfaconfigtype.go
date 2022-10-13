package shared

type SmsMfaConfigType struct {
	SmsAuthenticationMessage *string               `json:"SmsAuthenticationMessage"`
	SmsConfiguration         *SmsConfigurationType `json:"SmsConfiguration"`
}
