package shared

type GetOpenIDTokenForDeveloperIdentityResponse struct {
	IdentityID *string `json:"IdentityId,omitempty"`
	Token      *string `json:"Token,omitempty"`
}
