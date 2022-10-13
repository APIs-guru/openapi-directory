package shared

type BatchDeleteImportDataError struct {
	ErrorCode        *BatchDeleteImportDataErrorCodeEnum `json:"errorCode"`
	ErrorDescription *string                             `json:"errorDescription"`
	ImportTaskID     *string                             `json:"importTaskId"`
}
