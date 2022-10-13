package shared

type EmailConfigurationType struct {
	ConfigurationSet    *string                      `json:"ConfigurationSet"`
	EmailSendingAccount *EmailSendingAccountTypeEnum `json:"EmailSendingAccount"`
	From                *string                      `json:"From"`
	ReplyToEmailAddress *string                      `json:"ReplyToEmailAddress"`
	SourceArn           *string                      `json:"SourceArn"`
}
