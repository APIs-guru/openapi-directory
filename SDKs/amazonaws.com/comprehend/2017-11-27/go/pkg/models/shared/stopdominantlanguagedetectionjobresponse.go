package shared

type StopDominantLanguageDetectionJobResponse struct {
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
