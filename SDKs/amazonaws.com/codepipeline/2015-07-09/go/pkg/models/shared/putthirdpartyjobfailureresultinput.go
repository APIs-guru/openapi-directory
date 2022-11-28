package shared

// PutThirdPartyJobFailureResultInput
// Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
type PutThirdPartyJobFailureResultInput struct {
	ClientToken    string         `json:"clientToken"`
	FailureDetails FailureDetails `json:"failureDetails"`
	JobID          string         `json:"jobId"`
}
