package shared



type HoneycodeConnectorProfileCredentials struct {
    AccessToken *string `json:"accessToken,omitempty"`
    OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
    RefreshToken *string `json:"refreshToken,omitempty"`
    
}

