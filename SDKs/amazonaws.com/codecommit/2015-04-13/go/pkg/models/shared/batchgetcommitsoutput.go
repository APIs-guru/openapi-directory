package shared



type BatchGetCommitsOutput struct {
    Commits []Commit `json:"commits,omitempty"`
    Errors []BatchGetCommitsError `json:"errors,omitempty"`
    
}

