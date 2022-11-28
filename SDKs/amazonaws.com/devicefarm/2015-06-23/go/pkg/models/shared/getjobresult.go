package shared

// GetJobResult
// Represents the result of a get job request.
type GetJobResult struct {
	Job *Job `json:"job,omitempty"`
}
