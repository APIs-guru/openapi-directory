package shared

type StopSentimentDetectionJobResponse struct {
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
