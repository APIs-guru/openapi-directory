package shared

type DisableUserRequest struct {
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	UserName           string                 `json:"UserName"`
}
