package shared

// SourceCredentialsInfo
//
//	Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.
type SourceCredentialsInfo struct {
	Arn        *string         `json:"arn,omitempty"`
	AuthType   *AuthTypeEnum   `json:"authType,omitempty"`
	ServerType *ServerTypeEnum `json:"serverType,omitempty"`
}
