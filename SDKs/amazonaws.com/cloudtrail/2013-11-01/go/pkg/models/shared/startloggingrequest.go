package shared

// StartLoggingRequest
// The request to CloudTrail to start logging Amazon Web Services API calls for an account.
type StartLoggingRequest struct {
	Name string `json:"Name"`
}
