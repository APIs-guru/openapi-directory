package shared

type StopPiiEntitiesDetectionJobResponse struct {
	JobID     *string        `json:"JobId,omitempty"`
	JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
}
