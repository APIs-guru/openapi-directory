package shared

type ErrorInfo struct {
	ErrorCategory *ErrorCategoryEnum `json:"errorCategory"`
	ErrorMessage  *string            `json:"errorMessage"`
}
