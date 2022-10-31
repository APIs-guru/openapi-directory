package shared



type GetJobRunRequest struct {
    JobName string `json:"JobName"`
    PredecessorsIncluded *bool `json:"PredecessorsIncluded,omitempty"`
    RunID string `json:"RunId"`
    
}

