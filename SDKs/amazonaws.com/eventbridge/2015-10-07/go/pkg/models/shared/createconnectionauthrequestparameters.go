package shared

type CreateConnectionAuthRequestParameters struct {
	APIKeyAuthParameters     *CreateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters"`
	BasicAuthParameters      *CreateConnectionBasicAuthRequestParameters  `json:"BasicAuthParameters"`
	InvocationHTTPParameters *ConnectionHTTPParameters                    `json:"InvocationHttpParameters"`
	OAuthParameters          *CreateConnectionOAuthRequestParameters      `json:"OAuthParameters"`
}
