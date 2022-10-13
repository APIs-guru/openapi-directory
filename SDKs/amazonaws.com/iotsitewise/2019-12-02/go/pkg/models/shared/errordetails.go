package shared

type ErrorDetails struct {
	Code    ErrorCodeEnum   `json:"code"`
	Details []DetailedError `json:"details"`
	Message string          `json:"message"`
}
