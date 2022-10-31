package shared



type JobWithAttemptsRead struct {
    Attempts []AttemptRead `json:"attempts,omitempty"`
    Job *JobRead `json:"job,omitempty"`
    
}

