package shared

type NotifyConfigurationType struct {
	BlockEmail    *NotifyEmailType `json:"BlockEmail"`
	From          *string          `json:"From"`
	MfaEmail      *NotifyEmailType `json:"MfaEmail"`
	NoActionEmail *NotifyEmailType `json:"NoActionEmail"`
	ReplyTo       *string          `json:"ReplyTo"`
	SourceArn     string           `json:"SourceArn"`
}
