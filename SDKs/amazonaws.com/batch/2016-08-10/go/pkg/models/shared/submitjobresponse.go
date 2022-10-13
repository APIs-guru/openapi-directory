package shared

type SubmitJobResponse struct {
	JobArn  *string `json:"jobArn"`
	JobID   string  `json:"jobId"`
	JobName string  `json:"jobName"`
}
