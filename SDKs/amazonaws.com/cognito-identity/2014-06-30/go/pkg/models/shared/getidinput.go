package shared

type GetIDInput struct {
	AccountID      *string           `json:"AccountId"`
	IdentityPoolID string            `json:"IdentityPoolId"`
	Logins         map[string]string `json:"Logins"`
}
