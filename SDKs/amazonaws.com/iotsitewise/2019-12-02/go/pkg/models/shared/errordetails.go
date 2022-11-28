package shared

// ErrorDetails
// Contains the details of an IoT SiteWise error.
type ErrorDetails struct {
	Code    ErrorCodeEnum   `json:"code"`
	Details []DetailedError `json:"details,omitempty"`
	Message string          `json:"message"`
}
