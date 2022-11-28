package shared

// ErrorDetail
// An object representing an error when an asynchronous operation fails.
type ErrorDetail struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
	ResourceIds  []string       `json:"resourceIds,omitempty"`
}
