package shared

type UnprocessedAccount struct {
	AccountID *string `json:"AccountId"`
	Reason    *string `json:"Reason"`
}
