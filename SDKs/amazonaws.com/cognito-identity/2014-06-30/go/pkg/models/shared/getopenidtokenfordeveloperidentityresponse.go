package shared

type GetOpenIDTokenForDeveloperIdentityResponse struct {
	IdentityID *string `json:"IdentityId"`
	Token      *string `json:"Token"`
}
