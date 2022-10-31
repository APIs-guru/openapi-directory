package shared



type ConnectionAuthResponseParameters struct {
    APIKeyAuthParameters *ConnectionAPIKeyAuthResponseParameters `json:"ApiKeyAuthParameters,omitempty"`
    BasicAuthParameters *ConnectionBasicAuthResponseParameters `json:"BasicAuthParameters,omitempty"`
    InvocationHTTPParameters *ConnectionHTTPParameters `json:"InvocationHttpParameters,omitempty"`
    OAuthParameters *ConnectionOAuthResponseParameters `json:"OAuthParameters,omitempty"`
    
}

