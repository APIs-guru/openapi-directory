package shared



type SmsConfigurationType struct {
    ExternalID *string `json:"ExternalId,omitempty"`
    SnsCallerArn string `json:"SnsCallerArn"`
    
}

