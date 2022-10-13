package shared

type SourceCredentialsInfo struct {
	Arn        *string         `json:"arn"`
	AuthType   *AuthTypeEnum   `json:"authType"`
	ServerType *ServerTypeEnum `json:"serverType"`
}
