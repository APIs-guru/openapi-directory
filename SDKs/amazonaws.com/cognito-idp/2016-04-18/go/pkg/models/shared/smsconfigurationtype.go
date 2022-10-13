package shared

type SmsConfigurationType struct {
	ExternalID   *string `json:"ExternalId"`
	SnsCallerArn string  `json:"SnsCallerArn"`
}
