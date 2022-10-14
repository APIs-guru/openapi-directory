package shared

type CreateConnectionOAuthRequestParameters struct {
	AuthorizationEndpoint string                                       `json:"AuthorizationEndpoint"`
	ClientParameters      CreateConnectionOAuthClientRequestParameters `json:"ClientParameters"`
	HTTPMethod            ConnectionOAuthHTTPMethodEnum                `json:"HttpMethod"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                    `json:"OAuthHttpParameters,omitempty"`
}
