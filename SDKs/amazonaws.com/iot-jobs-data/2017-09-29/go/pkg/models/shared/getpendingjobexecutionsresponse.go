package shared



type GetPendingJobExecutionsResponse struct {
    InProgressJobs []JobExecutionSummary `json:"inProgressJobs,omitempty"`
    QueuedJobs []JobExecutionSummary `json:"queuedJobs,omitempty"`
    
}

