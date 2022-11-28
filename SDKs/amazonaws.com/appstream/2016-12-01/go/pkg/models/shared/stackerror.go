package shared

// StackError
// Describes a stack error.
type StackError struct {
	ErrorCode    *StackErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string             `json:"ErrorMessage,omitempty"`
}
