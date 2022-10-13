package shared

type StartEventsDetectionJobResponse struct {
	JobArn    *string        `json:"JobArn"`
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
