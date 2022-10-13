package shared

type StartDominantLanguageDetectionJobResponse struct {
	JobArn    *string        `json:"JobArn"`
	JobID     *string        `json:"JobId"`
	JobStatus *JobStatusEnum `json:"JobStatus"`
}
