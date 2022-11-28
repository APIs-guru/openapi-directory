package shared

// ErrorDetails
// An object containing error details.
type ErrorDetails struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
}
