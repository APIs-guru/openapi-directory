package shared

// GetOpenIDTokenInput
// Input to the GetOpenIdToken action.
type GetOpenIDTokenInput struct {
	IdentityID string            `json:"IdentityId"`
	Logins     map[string]string `json:"Logins,omitempty"`
}
