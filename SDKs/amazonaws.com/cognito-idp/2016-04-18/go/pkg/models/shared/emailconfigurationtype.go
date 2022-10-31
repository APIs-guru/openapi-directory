package shared



type EmailConfigurationType struct {
    ConfigurationSet *string `json:"ConfigurationSet,omitempty"`
    EmailSendingAccount *EmailSendingAccountTypeEnum `json:"EmailSendingAccount,omitempty"`
    From *string `json:"From,omitempty"`
    ReplyToEmailAddress *string `json:"ReplyToEmailAddress,omitempty"`
    SourceArn *string `json:"SourceArn,omitempty"`
    
}

