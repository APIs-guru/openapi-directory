package shared



type CreateConnectionAuthRequestParameters struct {
    APIKeyAuthParameters *CreateConnectionAPIKeyAuthRequestParameters `json:"ApiKeyAuthParameters,omitempty"`
    BasicAuthParameters *CreateConnectionBasicAuthRequestParameters `json:"BasicAuthParameters,omitempty"`
    InvocationHTTPParameters *ConnectionHTTPParameters `json:"InvocationHttpParameters,omitempty"`
    OAuthParameters *CreateConnectionOAuthRequestParameters `json:"OAuthParameters,omitempty"`
    
}

