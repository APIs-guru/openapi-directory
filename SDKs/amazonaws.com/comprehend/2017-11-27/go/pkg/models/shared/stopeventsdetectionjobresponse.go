package shared

type StopEventsDetectionJobResponse struct {
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
