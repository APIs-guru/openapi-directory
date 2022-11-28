package shared

// ErrorInformation
// Information about a deployment error.
type ErrorInformation struct {
	Code    *ErrorCodeEnum `json:"code,omitempty"`
	Message *string        `json:"message,omitempty"`
}
