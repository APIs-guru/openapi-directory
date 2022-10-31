package shared



type SapoDataConnectorProfileCredentials struct {
    BasicAuthCredentials *BasicAuthCredentials `json:"basicAuthCredentials,omitempty"`
    OAuthCredentials *OAuthCredentials `json:"oAuthCredentials,omitempty"`
    
}

