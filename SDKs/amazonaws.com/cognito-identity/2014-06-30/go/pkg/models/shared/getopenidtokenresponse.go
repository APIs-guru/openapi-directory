package shared

// GetOpenIDTokenResponse
// Returned in response to a successful GetOpenIdToken request.
type GetOpenIDTokenResponse struct {
	IdentityID *string `json:"IdentityId,omitempty"`
	Token      *string `json:"Token,omitempty"`
}
