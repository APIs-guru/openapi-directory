package shared

type BatchGetCommitsError struct {
	CommitID     *string `json:"commitId"`
	ErrorCode    *string `json:"errorCode"`
	ErrorMessage *string `json:"errorMessage"`
}
