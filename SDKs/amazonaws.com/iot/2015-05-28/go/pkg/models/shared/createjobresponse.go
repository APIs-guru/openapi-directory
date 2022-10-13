package shared

type CreateJobResponse struct {
	Description *string `json:"description"`
	JobArn      *string `json:"jobArn"`
	JobID       *string `json:"jobId"`
}
