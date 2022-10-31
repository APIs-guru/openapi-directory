package shared



type ResumeWorkflowRunRequest struct {
    Name string `json:"Name"`
    NodeIds []string `json:"NodeIds"`
    RunID string `json:"RunId"`
    
}

