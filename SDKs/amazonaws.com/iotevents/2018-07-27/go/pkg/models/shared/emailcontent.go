package shared



type EmailContent struct {
    AdditionalMessage *string `json:"additionalMessage,omitempty"`
    Subject *string `json:"subject,omitempty"`
    
}

