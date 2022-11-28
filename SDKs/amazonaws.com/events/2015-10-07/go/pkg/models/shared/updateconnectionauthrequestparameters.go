package shared

// UpdateConnectionAuthRequestParameters
// Contains the additional parameters to use for the connection.
type UpdateConnectionAuthRequestParameters struct {
	APIKeyAuthParameters     *UpdateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters,omitempty"`
	BasicAuthParameters      *UpdateConnectionBasicAuthRequestParameters  `json:"BasicAuthParameters,omitempty"`
	InvocationHTTPParameters *ConnectionHTTPParameters                    `json:"InvocationHttpParameters,omitempty"`
	OAuthParameters          *UpdateConnectionOAuthRequestParameters      `json:"OAuthParameters,omitempty"`
}
