package shared

type Settings struct {
	MfaTypes   []MfaTypesElementEnum `json:"MfaTypes"`
	SmsMessage *string               `json:"SmsMessage"`
}
