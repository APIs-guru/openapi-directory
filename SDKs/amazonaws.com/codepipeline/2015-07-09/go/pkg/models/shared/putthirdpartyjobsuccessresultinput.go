package shared

type PutThirdPartyJobSuccessResultInput struct {
	ClientToken       string            `json:"clientToken"`
	ContinuationToken *string           `json:"continuationToken,omitempty"`
	CurrentRevision   *CurrentRevision  `json:"currentRevision,omitempty"`
	ExecutionDetails  *ExecutionDetails `json:"executionDetails,omitempty"`
	JobID             string            `json:"jobId"`
}
