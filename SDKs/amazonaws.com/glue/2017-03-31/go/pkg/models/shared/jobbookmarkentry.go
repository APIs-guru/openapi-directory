package shared



type JobBookmarkEntry struct {
    Attempt *int64 `json:"Attempt,omitempty"`
    JobBookmark *string `json:"JobBookmark,omitempty"`
    JobName *string `json:"JobName,omitempty"`
    PreviousRunID *string `json:"PreviousRunId,omitempty"`
    Run *int64 `json:"Run,omitempty"`
    RunID *string `json:"RunId,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

