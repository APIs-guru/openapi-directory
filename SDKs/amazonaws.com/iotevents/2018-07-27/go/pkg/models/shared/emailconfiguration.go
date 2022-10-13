package shared

type EmailConfiguration struct {
	Content    *EmailContent   `json:"content"`
	From       string          `json:"from"`
	Recipients EmailRecipients `json:"recipients"`
}
