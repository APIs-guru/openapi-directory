package shared

// JobError
// Contains the details about the policy generation error.
type JobError struct {
	Code    JobErrorCodeEnum `json:"code"`
	Message string           `json:"message"`
}
