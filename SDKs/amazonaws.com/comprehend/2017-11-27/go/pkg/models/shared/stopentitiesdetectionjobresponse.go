package shared

type StopEntitiesDetectionJobResponse struct {
	JobID     *string        `json:"JobId,omitempty"`
	JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
}
