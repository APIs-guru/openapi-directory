package shared

type PutThirdPartyJobSuccessResultInput struct {
	ClientToken       string            `json:"clientToken"`
	ContinuationToken *string           `json:"continuationToken"`
	CurrentRevision   *CurrentRevision  `json:"currentRevision"`
	ExecutionDetails  *ExecutionDetails `json:"executionDetails"`
	JobID             string            `json:"jobId"`
}
