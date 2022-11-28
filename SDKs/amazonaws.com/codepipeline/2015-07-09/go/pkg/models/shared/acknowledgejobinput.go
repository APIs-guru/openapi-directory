package shared

// AcknowledgeJobInput
// Represents the input of an AcknowledgeJob action.
type AcknowledgeJobInput struct {
	JobID string `json:"jobId"`
	Nonce string `json:"nonce"`
}
