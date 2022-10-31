package shared



type GetJobBookmarkRequest struct {
    JobName string `json:"JobName"`
    RunID *string `json:"RunId,omitempty"`
    
}

