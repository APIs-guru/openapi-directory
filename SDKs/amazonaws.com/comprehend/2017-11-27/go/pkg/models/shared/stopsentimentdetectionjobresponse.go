package shared

type StopSentimentDetectionJobResponse struct {
	JobID     *string        `json:"JobId,omitempty"`
	JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
}
