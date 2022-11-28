package shared

// ErrorDetail
// Details about the error.
type ErrorDetail struct {
	DetailedErrorCode    *string `json:"DetailedErrorCode,omitempty"`
	DetailedErrorMessage *string `json:"DetailedErrorMessage,omitempty"`
}
