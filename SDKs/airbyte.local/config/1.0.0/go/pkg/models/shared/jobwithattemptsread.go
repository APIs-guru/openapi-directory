package shared

type JobWithAttemptsRead struct {
	Attempts []AttemptRead `json:"attempts"`
	Job      *JobRead      `json:"job"`
}
