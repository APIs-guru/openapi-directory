package shared

// Job
//
//	Describes an execution job for an Amplify app.
type Job struct {
	Steps   []Step     `json:"steps"`
	Summary JobSummary `json:"summary"`
}
