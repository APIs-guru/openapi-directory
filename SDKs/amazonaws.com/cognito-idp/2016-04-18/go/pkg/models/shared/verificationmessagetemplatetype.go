package shared

type VerificationMessageTemplateType struct {
	DefaultEmailOption *DefaultEmailOptionTypeEnum `json:"DefaultEmailOption,omitempty"`
	EmailMessage       *string                     `json:"EmailMessage,omitempty"`
	EmailMessageByLink *string                     `json:"EmailMessageByLink,omitempty"`
	EmailSubject       *string                     `json:"EmailSubject,omitempty"`
	EmailSubjectByLink *string                     `json:"EmailSubjectByLink,omitempty"`
	SmsMessage         *string                     `json:"SmsMessage,omitempty"`
}
