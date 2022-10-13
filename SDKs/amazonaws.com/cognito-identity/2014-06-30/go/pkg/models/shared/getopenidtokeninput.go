package shared

type GetOpenIDTokenInput struct {
	IdentityID string            `json:"IdentityId"`
	Logins     map[string]string `json:"Logins"`
}
