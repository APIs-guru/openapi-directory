package shared

// LastReportGenerationExecutionError
// Describes the error that is returned when a usage report can't be generated.
type LastReportGenerationExecutionError struct {
	ErrorCode    *UsageReportExecutionErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string                            `json:"ErrorMessage,omitempty"`
}
