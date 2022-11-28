package shared

// GetOpenIDTokenForDeveloperIdentityInput
// Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
type GetOpenIDTokenForDeveloperIdentityInput struct {
	IdentityID     *string           `json:"IdentityId,omitempty"`
	IdentityPoolID string            `json:"IdentityPoolId"`
	Logins         map[string]string `json:"Logins"`
	PrincipalTags  map[string]string `json:"PrincipalTags,omitempty"`
	TokenDuration  *int64            `json:"TokenDuration,omitempty"`
}
