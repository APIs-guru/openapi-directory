package shared

// Settings
// The settings of your MFA configuration for the backend of your Amplify project.
type Settings struct {
	MfaTypes   []MfaTypesElementEnum `json:"MfaTypes,omitempty"`
	SmsMessage *string               `json:"SmsMessage,omitempty"`
}
