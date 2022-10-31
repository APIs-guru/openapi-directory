package shared

type CreateJobQueueResponse struct {
	JobQueueArn  string `json:"jobQueueArn"`
	JobQueueName string `json:"jobQueueName"`
}
