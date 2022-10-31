package shared

type Job struct {
	Steps   []Step     `json:"steps"`
	Summary JobSummary `json:"summary"`
}
