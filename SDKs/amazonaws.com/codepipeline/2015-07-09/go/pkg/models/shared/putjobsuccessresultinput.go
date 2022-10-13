package shared

type PutJobSuccessResultInput struct {
	ContinuationToken *string           `json:"continuationToken"`
	CurrentRevision   *CurrentRevision  `json:"currentRevision"`
	ExecutionDetails  *ExecutionDetails `json:"executionDetails"`
	JobID             string            `json:"jobId"`
	OutputVariables   map[string]string `json:"outputVariables"`
}
