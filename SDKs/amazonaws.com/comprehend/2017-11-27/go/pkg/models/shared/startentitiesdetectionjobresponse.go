package shared

type StartEntitiesDetectionJobResponse struct {
	JobArn    *string        `json:"JobArn"`
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
