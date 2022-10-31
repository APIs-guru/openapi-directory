package shared

type CreateUserRequest struct {
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	FirstName          *string                `json:"FirstName,omitempty"`
	LastName           *string                `json:"LastName,omitempty"`
	MessageAction      *MessageActionEnum     `json:"MessageAction,omitempty"`
	UserName           string                 `json:"UserName"`
}
