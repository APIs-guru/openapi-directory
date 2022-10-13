package shared

type SmsConfiguration struct {
	AdditionalMessage *string           `json:"additionalMessage"`
	Recipients        []RecipientDetail `json:"recipients"`
	SenderID          *string           `json:"senderId"`
}
