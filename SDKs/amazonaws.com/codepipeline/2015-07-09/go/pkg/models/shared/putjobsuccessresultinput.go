package shared

// PutJobSuccessResultInput
// Represents the input of a <code>PutJobSuccessResult</code> action.
type PutJobSuccessResultInput struct {
	ContinuationToken *string           `json:"continuationToken,omitempty"`
	CurrentRevision   *CurrentRevision  `json:"currentRevision,omitempty"`
	ExecutionDetails  *ExecutionDetails `json:"executionDetails,omitempty"`
	JobID             string            `json:"jobId"`
	OutputVariables   map[string]string `json:"outputVariables,omitempty"`
}
