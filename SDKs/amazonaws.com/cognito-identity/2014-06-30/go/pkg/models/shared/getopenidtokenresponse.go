package shared

type GetOpenIDTokenResponse struct {
	IdentityID *string `json:"IdentityId"`
	Token      *string `json:"Token"`
}
