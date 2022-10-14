package shared

type LastReportGenerationExecutionError struct {
	ErrorCode    *UsageReportExecutionErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string                            `json:"ErrorMessage,omitempty"`
}
