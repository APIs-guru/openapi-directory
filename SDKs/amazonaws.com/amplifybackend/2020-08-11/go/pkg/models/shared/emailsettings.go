package shared

// EmailSettings
// The configuration for the email sent when an app user forgets their password.
type EmailSettings struct {
	EmailMessage *string `json:"EmailMessage,omitempty"`
	EmailSubject *string `json:"EmailSubject,omitempty"`
}
