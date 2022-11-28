package shared

// NotifyConfigurationType
// The notify configuration type.
type NotifyConfigurationType struct {
	BlockEmail    *NotifyEmailType `json:"BlockEmail,omitempty"`
	From          *string          `json:"From,omitempty"`
	MfaEmail      *NotifyEmailType `json:"MfaEmail,omitempty"`
	NoActionEmail *NotifyEmailType `json:"NoActionEmail,omitempty"`
	ReplyTo       *string          `json:"ReplyTo,omitempty"`
	SourceArn     string           `json:"SourceArn"`
}
