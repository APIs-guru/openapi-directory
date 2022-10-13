package shared

type ImportSourceCredentialsInput struct {
	AuthType        AuthTypeEnum   `json:"authType"`
	ServerType      ServerTypeEnum `json:"serverType"`
	ShouldOverwrite *bool          `json:"shouldOverwrite"`
	Token           string         `json:"token"`
	Username        *string        `json:"username"`
}
