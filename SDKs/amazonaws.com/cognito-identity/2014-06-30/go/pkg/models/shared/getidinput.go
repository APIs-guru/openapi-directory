package shared

type GetIDInput struct {
	AccountID      *string           `json:"AccountId,omitempty"`
	IdentityPoolID string            `json:"IdentityPoolId"`
	Logins         map[string]string `json:"Logins,omitempty"`
}
