package shared

type UpdateConnectionOAuthRequestParameters struct {
	AuthorizationEndpoint *string                                       `json:"AuthorizationEndpoint"`
	ClientParameters      *UpdateConnectionOAuthClientRequestParameters `json:"ClientParameters"`
	HTTPMethod            *ConnectionOAuthHTTPMethodEnum                `json:"HttpMethod"`
	OAuthHTTPParameters   *ConnectionHTTPParameters                     `json:"OAuthHttpParameters"`
}
