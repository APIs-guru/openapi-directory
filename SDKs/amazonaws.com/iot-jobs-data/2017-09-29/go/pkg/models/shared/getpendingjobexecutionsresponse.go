package shared

type GetPendingJobExecutionsResponse struct {
	InProgressJobs []JobExecutionSummary `json:"inProgressJobs"`
	QueuedJobs     []JobExecutionSummary `json:"queuedJobs"`
}
