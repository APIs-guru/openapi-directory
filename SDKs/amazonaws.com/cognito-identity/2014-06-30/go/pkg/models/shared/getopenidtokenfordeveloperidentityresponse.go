package shared

// GetOpenIDTokenForDeveloperIdentityResponse
// Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
type GetOpenIDTokenForDeveloperIdentityResponse struct {
	IdentityID *string `json:"IdentityId,omitempty"`
	Token      *string `json:"Token,omitempty"`
}
