package shared

// GetIDInput
// Input to the GetId action.
type GetIDInput struct {
	AccountID      *string           `json:"AccountId,omitempty"`
	IdentityPoolID string            `json:"IdentityPoolId"`
	Logins         map[string]string `json:"Logins,omitempty"`
}
