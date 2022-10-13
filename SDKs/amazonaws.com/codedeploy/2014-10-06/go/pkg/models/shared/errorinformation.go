package shared

type ErrorInformation struct {
	Code    *ErrorCodeEnum `json:"code"`
	Message *string        `json:"message"`
}
