package shared

type LastReportGenerationExecutionError struct {
	ErrorCode    *UsageReportExecutionErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage *string                            `json:"ErrorMessage"`
}
