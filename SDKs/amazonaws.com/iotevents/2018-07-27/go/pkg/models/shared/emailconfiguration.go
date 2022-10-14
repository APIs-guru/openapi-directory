package shared

type EmailConfiguration struct {
	Content    *EmailContent   `json:"content,omitempty"`
	From       string          `json:"from"`
	Recipients EmailRecipients `json:"recipients"`
}
