package shared

// BatchGetCommitsError
// Returns information about errors in a BatchGetCommits operation.
type BatchGetCommitsError struct {
	CommitID     *string `json:"commitId,omitempty"`
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
}
