package shared

type ConnectionOAuthResponseParameters struct {
	AuthorizationEndpoint *string                                  `json:"AuthorizationEndpoint"`
	ClientParameters      *ConnectionOAuthClientResponseParameters `json:"ClientParameters"`
	HTTPMethod            *ConnectionOAuthHTTPMethodEnum           `json:"HttpMethod"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                `json:"OAuthHttpParameters"`
}
