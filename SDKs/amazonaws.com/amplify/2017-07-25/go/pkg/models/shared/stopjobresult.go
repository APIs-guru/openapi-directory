package shared

// StopJobResult
//
//	The result structure for the stop job request.
type StopJobResult struct {
	JobSummary JobSummary `json:"jobSummary"`
}
