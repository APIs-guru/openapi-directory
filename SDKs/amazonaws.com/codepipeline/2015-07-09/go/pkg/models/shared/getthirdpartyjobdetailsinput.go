package shared

// GetThirdPartyJobDetailsInput
// Represents the input of a <code>GetThirdPartyJobDetails</code> action.
type GetThirdPartyJobDetailsInput struct {
	ClientToken string `json:"clientToken"`
	JobID       string `json:"jobId"`
}
