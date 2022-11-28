package shared

// ErrorInfo
// Error information.
type ErrorInfo struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
