package shared

// CreateConnectionAuthRequestParameters
// Contains the authorization parameters for the connection.
type CreateConnectionAuthRequestParameters struct {
	APIKeyAuthParameters     *CreateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters,omitempty"`
	BasicAuthParameters      *CreateConnectionBasicAuthRequestParameters  `json:"BasicAuthParameters,omitempty"`
	InvocationHTTPParameters *ConnectionHTTPParameters                    `json:"InvocationHttpParameters,omitempty"`
	OAuthParameters          *CreateConnectionOAuthRequestParameters      `json:"OAuthParameters,omitempty"`
}
