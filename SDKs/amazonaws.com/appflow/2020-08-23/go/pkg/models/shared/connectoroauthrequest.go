package shared



type ConnectorOAuthRequest struct {
    AuthCode *string `json:"authCode,omitempty"`
    RedirectURI *string `json:"redirectUri,omitempty"`
    
}

