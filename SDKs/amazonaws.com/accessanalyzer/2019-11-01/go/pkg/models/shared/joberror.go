package shared

type JobError struct {
	Code    JobErrorCodeEnum `json:"code"`
	Message string           `json:"message"`
}
