package shared

// EmailContent
// Contains the subject and message of an email.
type EmailContent struct {
	AdditionalMessage *string `json:"additionalMessage,omitempty"`
	Subject           *string `json:"subject,omitempty"`
}
