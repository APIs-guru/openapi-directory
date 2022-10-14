package shared

type StackError struct {
	ErrorCode    *StackErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string             `json:"ErrorMessage,omitempty"`
}
