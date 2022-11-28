package shared

// SmsConfiguration
// Contains the configuration information of SMS notifications.
type SmsConfiguration struct {
	AdditionalMessage *string           `json:"additionalMessage,omitempty"`
	Recipients        []RecipientDetail `json:"recipients"`
	SenderID          *string           `json:"senderId,omitempty"`
}
