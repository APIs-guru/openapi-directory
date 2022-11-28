package shared

// AcknowledgeThirdPartyJobInput
// Represents the input of an AcknowledgeThirdPartyJob action.
type AcknowledgeThirdPartyJobInput struct {
	ClientToken string `json:"clientToken"`
	JobID       string `json:"jobId"`
	Nonce       string `json:"nonce"`
}
