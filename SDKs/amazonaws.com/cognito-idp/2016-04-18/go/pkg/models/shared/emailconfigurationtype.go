package shared

// EmailConfigurationType
// <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
type EmailConfigurationType struct {
	ConfigurationSet    *string                      `json:"ConfigurationSet,omitempty"`
	EmailSendingAccount *EmailSendingAccountTypeEnum `json:"EmailSendingAccount,omitempty"`
	From                *string                      `json:"From,omitempty"`
	ReplyToEmailAddress *string                      `json:"ReplyToEmailAddress,omitempty"`
	SourceArn           *string                      `json:"SourceArn,omitempty"`
}
