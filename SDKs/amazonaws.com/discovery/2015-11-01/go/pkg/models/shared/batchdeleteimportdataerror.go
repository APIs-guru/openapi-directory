package shared



type BatchDeleteImportDataError struct {
    ErrorCode *BatchDeleteImportDataErrorCodeEnum `json:"errorCode,omitempty"`
    ErrorDescription *string `json:"errorDescription,omitempty"`
    ImportTaskID *string `json:"importTaskId,omitempty"`
    
}

