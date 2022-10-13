package shared

type UpdateConnectionAuthRequestParameters struct {
	APIKeyAuthParameters     *UpdateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters"`
	BasicAuthParameters      *UpdateConnectionBasicAuthRequestParameters  `json:"BasicAuthParameters"`
	InvocationHTTPParameters *ConnectionHTTPParameters                    `json:"InvocationHttpParameters"`
	OAuthParameters          *UpdateConnectionOAuthRequestParameters      `json:"OAuthParameters"`
}
