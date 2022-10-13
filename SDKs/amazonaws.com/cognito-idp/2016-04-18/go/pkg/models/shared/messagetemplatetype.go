package shared

type MessageTemplateType struct {
	EmailMessage *string `json:"EmailMessage"`
	EmailSubject *string `json:"EmailSubject"`
	SmsMessage   *string `json:"SMSMessage"`
}
