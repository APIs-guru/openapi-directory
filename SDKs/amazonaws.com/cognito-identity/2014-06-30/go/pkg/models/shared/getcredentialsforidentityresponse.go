package shared

type GetCredentialsForIdentityResponse struct {
	Credentials *Credentials `json:"Credentials"`
	IdentityID  *string      `json:"IdentityId"`
}
