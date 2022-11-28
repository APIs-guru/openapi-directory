package shared

// Account
// An AWS account that is the administrator account of or a member of a behavior graph.
type Account struct {
	AccountID    string `json:"AccountId"`
	EmailAddress string `json:"EmailAddress"`
}
