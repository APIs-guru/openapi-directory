package shared

// BatchDeleteImportDataError
// Error messages returned for each import task that you deleted as a response for this command.
type BatchDeleteImportDataError struct {
	ErrorCode        *BatchDeleteImportDataErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorDescription *string                             `json:"errorDescription,omitempty"`
	ImportTaskID     *string                             `json:"importTaskId,omitempty"`
}
