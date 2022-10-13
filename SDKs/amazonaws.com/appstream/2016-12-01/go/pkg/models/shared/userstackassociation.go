package shared

type UserStackAssociation struct {
	AuthenticationType    AuthenticationTypeEnum `json:"AuthenticationType"`
	SendEmailNotification *bool                  `json:"SendEmailNotification"`
	StackName             string                 `json:"StackName"`
	UserName              string                 `json:"UserName"`
}
