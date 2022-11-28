package shared

// SqsAction
// Describes an action to publish data to an Amazon SQS queue.
type SqsAction struct {
	QueueURL  string `json:"queueUrl"`
	RoleArn   string `json:"roleArn"`
	UseBase64 *bool  `json:"useBase64,omitempty"`
}
