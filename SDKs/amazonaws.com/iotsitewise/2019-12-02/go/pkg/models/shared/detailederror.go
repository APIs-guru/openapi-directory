package shared

type DetailedError struct {
	Code    DetailedErrorCodeEnum `json:"code"`
	Message string                `json:"message"`
}
