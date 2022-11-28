package shared

// UserStackAssociation
// Describes a user in the user pool and the associated stack.
type UserStackAssociation struct {
	AuthenticationType    AuthenticationTypeEnum `json:"AuthenticationType"`
	SendEmailNotification *bool                  `json:"SendEmailNotification,omitempty"`
	StackName             string                 `json:"StackName"`
	UserName              string                 `json:"UserName"`
}
