package shared

type SubmitJobResponse struct {
	JobArn  *string `json:"jobArn,omitempty"`
	JobID   string  `json:"jobId"`
	JobName string  `json:"jobName"`
}
