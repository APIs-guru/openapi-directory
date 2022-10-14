package shared

type ThirdPartyJobDetails struct {
	Data  *ThirdPartyJobData `json:"data,omitempty"`
	ID    *string            `json:"id,omitempty"`
	Nonce *string            `json:"nonce,omitempty"`
}
