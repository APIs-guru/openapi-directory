package shared

// GetCredentialsForIdentityInput
// Input to the <code>GetCredentialsForIdentity</code> action.
type GetCredentialsForIdentityInput struct {
	CustomRoleArn *string           `json:"CustomRoleArn,omitempty"`
	IdentityID    string            `json:"IdentityId"`
	Logins        map[string]string `json:"Logins,omitempty"`
}
