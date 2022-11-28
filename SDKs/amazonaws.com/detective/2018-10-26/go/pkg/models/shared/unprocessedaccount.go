package shared

// UnprocessedAccount
// A member account that was included in a request but for which the request could not be processed.
type UnprocessedAccount struct {
	AccountID *string `json:"AccountId,omitempty"`
	Reason    *string `json:"Reason,omitempty"`
}
