package shared

type VerificationMessageTemplateType struct {
	DefaultEmailOption *DefaultEmailOptionTypeEnum `json:"DefaultEmailOption"`
	EmailMessage       *string                     `json:"EmailMessage"`
	EmailMessageByLink *string                     `json:"EmailMessageByLink"`
	EmailSubject       *string                     `json:"EmailSubject"`
	EmailSubjectByLink *string                     `json:"EmailSubjectByLink"`
	SmsMessage         *string                     `json:"SmsMessage"`
}
