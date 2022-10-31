package shared



type Settings struct {
    MfaTypes []MfaTypesElementEnum `json:"MfaTypes,omitempty"`
    SmsMessage *string `json:"SmsMessage,omitempty"`
    
}

