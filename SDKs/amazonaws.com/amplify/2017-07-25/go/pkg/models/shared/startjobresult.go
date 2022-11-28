package shared

// StartJobResult
//
//	The result structure for the run job request.
type StartJobResult struct {
	JobSummary JobSummary `json:"jobSummary"`
}
