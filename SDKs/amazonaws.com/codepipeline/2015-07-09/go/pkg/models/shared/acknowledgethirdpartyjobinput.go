package shared

type AcknowledgeThirdPartyJobInput struct {
	ClientToken string `json:"clientToken"`
	JobID       string `json:"jobId"`
	Nonce       string `json:"nonce"`
}
