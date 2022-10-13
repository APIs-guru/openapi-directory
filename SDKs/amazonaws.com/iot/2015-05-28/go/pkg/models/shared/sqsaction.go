package shared

type SqsAction struct {
	QueueURL  string `json:"queueUrl"`
	RoleArn   string `json:"roleArn"`
	UseBase64 *bool  `json:"useBase64"`
}
