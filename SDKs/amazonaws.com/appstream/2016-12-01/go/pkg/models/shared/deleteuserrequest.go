package shared

type DeleteUserRequest struct {
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	UserName           string                 `json:"UserName"`
}
