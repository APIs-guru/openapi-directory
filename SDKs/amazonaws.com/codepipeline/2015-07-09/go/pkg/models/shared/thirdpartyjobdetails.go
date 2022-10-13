package shared

type ThirdPartyJobDetails struct {
	Data  *ThirdPartyJobData `json:"data"`
	ID    *string            `json:"id"`
	Nonce *string            `json:"nonce"`
}
