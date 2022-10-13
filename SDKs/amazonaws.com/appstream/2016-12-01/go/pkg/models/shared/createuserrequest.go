package shared

type CreateUserRequest struct {
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	FirstName          *string                `json:"FirstName"`
	LastName           *string                `json:"LastName"`
	MessageAction      *MessageActionEnum     `json:"MessageAction"`
	UserName           string                 `json:"UserName"`
}
