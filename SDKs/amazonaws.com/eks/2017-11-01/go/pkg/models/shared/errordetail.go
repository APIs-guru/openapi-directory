package shared

type ErrorDetail struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string        `json:"errorMessage"`
	ResourceIds  []string       `json:"resourceIds"`
}
