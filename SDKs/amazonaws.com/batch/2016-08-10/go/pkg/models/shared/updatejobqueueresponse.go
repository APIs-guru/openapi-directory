package shared

type UpdateJobQueueResponse struct {
	JobQueueArn  *string `json:"jobQueueArn"`
	JobQueueName *string `json:"jobQueueName"`
}
