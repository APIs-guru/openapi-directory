package shared

// PutThirdPartyJobSuccessResultInput
// Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
type PutThirdPartyJobSuccessResultInput struct {
	ClientToken       string            `json:"clientToken"`
	ContinuationToken *string           `json:"continuationToken,omitempty"`
	CurrentRevision   *CurrentRevision  `json:"currentRevision,omitempty"`
	ExecutionDetails  *ExecutionDetails `json:"executionDetails,omitempty"`
	JobID             string            `json:"jobId"`
}
