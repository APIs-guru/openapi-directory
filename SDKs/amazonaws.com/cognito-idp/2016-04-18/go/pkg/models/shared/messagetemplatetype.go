package shared

// MessageTemplateType
// The message template structure.
type MessageTemplateType struct {
	EmailMessage *string `json:"EmailMessage,omitempty"`
	EmailSubject *string `json:"EmailSubject,omitempty"`
	SmsMessage   *string `json:"SMSMessage,omitempty"`
}
