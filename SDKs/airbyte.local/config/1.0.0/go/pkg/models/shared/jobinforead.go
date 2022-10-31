package shared

type JobInfoRead struct {
	Attempts []AttemptInfoRead `json:"attempts"`
	Job      JobRead           `json:"job"`
}
