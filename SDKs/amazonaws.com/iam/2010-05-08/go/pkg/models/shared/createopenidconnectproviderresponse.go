package shared

// CreateOpenIDConnectProviderResponse
// Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request.
type CreateOpenIDConnectProviderResponse struct {
	OpenIDConnectProviderArn *string
	Tags                     []Tag
}
