package shared

type CancelJobResponse struct {
	Description *string `json:"description"`
	JobArn      *string `json:"jobArn"`
	JobID       *string `json:"jobId"`
}
