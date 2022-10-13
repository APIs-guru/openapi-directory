package shared

type Job struct {
	AccountID *string  `json:"accountId"`
	Data      *JobData `json:"data"`
	ID        *string  `json:"id"`
	Nonce     *string  `json:"nonce"`
}
