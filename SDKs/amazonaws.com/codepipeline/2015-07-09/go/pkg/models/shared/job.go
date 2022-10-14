package shared

type Job struct {
	AccountID *string  `json:"accountId,omitempty"`
	Data      *JobData `json:"data,omitempty"`
	ID        *string  `json:"id,omitempty"`
	Nonce     *string  `json:"nonce,omitempty"`
}
