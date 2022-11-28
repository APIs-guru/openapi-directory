package shared

// ConnectionAuthResponseParameters
// Contains the authorization parameters to use for the connection.
type ConnectionAuthResponseParameters struct {
	APIKeyAuthParameters     *ConnectionAPIKeyAuthResponseParameters `json:"ApiKeyAuthParameters,omitempty"`
	BasicAuthParameters      *ConnectionBasicAuthResponseParameters  `json:"BasicAuthParameters,omitempty"`
	InvocationHTTPParameters *ConnectionHTTPParameters               `json:"InvocationHttpParameters,omitempty"`
	OAuthParameters          *ConnectionOAuthResponseParameters      `json:"OAuthParameters,omitempty"`
}
