package shared



type SourceCredentialsInfo struct {
    Arn *string `json:"arn,omitempty"`
    AuthType *AuthTypeEnum `json:"authType,omitempty"`
    ServerType *ServerTypeEnum `json:"serverType,omitempty"`
    
}

