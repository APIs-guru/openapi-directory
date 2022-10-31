package shared



type ImportSourceCredentialsInput struct {
    AuthType AuthTypeEnum `json:"authType"`
    ServerType ServerTypeEnum `json:"serverType"`
    ShouldOverwrite *bool `json:"shouldOverwrite,omitempty"`
    Token string `json:"token"`
    Username *string `json:"username,omitempty"`
    
}

