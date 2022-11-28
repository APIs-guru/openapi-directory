package shared

// UnlinkIdentityInput
// Input to the UnlinkIdentity action.
type UnlinkIdentityInput struct {
	IdentityID     string            `json:"IdentityId"`
	Logins         map[string]string `json:"Logins"`
	LoginsToRemove []string          `json:"LoginsToRemove"`
}
