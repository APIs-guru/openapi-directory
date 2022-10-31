package shared



type SmsConfiguration struct {
    AdditionalMessage *string `json:"additionalMessage,omitempty"`
    Recipients []RecipientDetail `json:"recipients"`
    SenderID *string `json:"senderId,omitempty"`
    
}

