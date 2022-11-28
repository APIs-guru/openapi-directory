package shared

// StopLoggingRequest
// Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
type StopLoggingRequest struct {
	Name string `json:"Name"`
}
