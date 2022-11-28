package shared

// DetailedError
// Contains detailed error information.
type DetailedError struct {
	Code    DetailedErrorCodeEnum `json:"code"`
	Message string                `json:"message"`
}
