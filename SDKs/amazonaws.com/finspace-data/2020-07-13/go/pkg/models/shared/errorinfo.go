package shared

type ErrorInfo struct {
	ErrorCategory *ErrorCategoryEnum `json:"errorCategory,omitempty"`
	ErrorMessage  *string            `json:"errorMessage,omitempty"`
}
