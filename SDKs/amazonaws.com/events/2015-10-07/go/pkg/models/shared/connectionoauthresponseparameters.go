package shared

// ConnectionOAuthResponseParameters
// Contains the response parameters when OAuth is specified as the authorization type.
type ConnectionOAuthResponseParameters struct {
	AuthorizationEndpoint *string                                  `json:"AuthorizationEndpoint,omitempty"`
	ClientParameters      *ConnectionOAuthClientResponseParameters `json:"ClientParameters,omitempty"`
	HTTPMethod            *ConnectionOAuthHTTPMethodEnum           `json:"HttpMethod,omitempty"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                `json:"OAuthHttpParameters,omitempty"`
}
