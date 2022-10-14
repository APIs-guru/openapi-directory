package shared

type ConnectionOAuthResponseParameters struct {
	AuthorizationEndpoint *string                                  `json:"AuthorizationEndpoint,omitempty"`
	ClientParameters      *ConnectionOAuthClientResponseParameters `json:"ClientParameters,omitempty"`
	HTTPMethod            *ConnectionOAuthHTTPMethodEnum           `json:"HttpMethod,omitempty"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                `json:"OAuthHttpParameters,omitempty"`
}
