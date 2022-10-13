package shared

type GetOpenIDTokenForDeveloperIdentityInput struct {
	IdentityID     *string           `json:"IdentityId"`
	IdentityPoolID string            `json:"IdentityPoolId"`
	Logins         map[string]string `json:"Logins"`
	PrincipalTags  map[string]string `json:"PrincipalTags"`
	TokenDuration  *int64            `json:"TokenDuration"`
}
