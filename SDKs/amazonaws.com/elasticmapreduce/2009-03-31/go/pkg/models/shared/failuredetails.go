package shared

// FailureDetails
// The details of the step failure. The service attempts to detect the root cause for many common failures.
type FailureDetails struct {
	LogFile *string `json:"LogFile,omitempty"`
	Message *string `json:"Message,omitempty"`
	Reason  *string `json:"Reason,omitempty"`
}
