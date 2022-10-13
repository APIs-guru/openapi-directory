package shared

type ConnectionAuthResponseParameters struct {
	APIKeyAuthParameters     *ConnectionAPIKeyAuthResponseParameters `json:"ApiKeyAuthParameters"`
	BasicAuthParameters      *ConnectionBasicAuthResponseParameters  `json:"BasicAuthParameters"`
	InvocationHTTPParameters *ConnectionHTTPParameters               `json:"InvocationHttpParameters"`
	OAuthParameters          *ConnectionOAuthResponseParameters      `json:"OAuthParameters"`
}
