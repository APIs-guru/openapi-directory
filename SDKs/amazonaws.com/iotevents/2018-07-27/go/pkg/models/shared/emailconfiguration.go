package shared

// EmailConfiguration
// Contains the configuration information of email notifications.
type EmailConfiguration struct {
	Content    *EmailContent   `json:"content,omitempty"`
	From       string          `json:"from"`
	Recipients EmailRecipients `json:"recipients"`
}
