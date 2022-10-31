package shared



type MarketoConnectorProfileCredentials struct {
    AccessToken *string `json:"accessToken,omitempty"`
    ClientID string `json:"clientId"`
    ClientSecret string `json:"clientSecret"`
    OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
    
}

