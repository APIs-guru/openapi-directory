package shared

type UpdateConnectionAuthRequestParameters struct {
	APIKeyAuthParameters     *UpdateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters,omitempty"`
	BasicAuthParameters      *UpdateConnectionBasicAuthRequestParameters  `json:"BasicAuthParameters,omitempty"`
	InvocationHTTPParameters *ConnectionHTTPParameters                    `json:"InvocationHttpParameters,omitempty"`
	OAuthParameters          *UpdateConnectionOAuthRequestParameters      `json:"OAuthParameters,omitempty"`
}
