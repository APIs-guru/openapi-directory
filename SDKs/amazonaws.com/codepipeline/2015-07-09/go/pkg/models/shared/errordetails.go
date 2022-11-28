package shared

// ErrorDetails
// Represents information about an error in AWS CodePipeline.
type ErrorDetails struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
