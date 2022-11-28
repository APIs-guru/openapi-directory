package shared

// SqsAction
// Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
type SqsAction struct {
	Payload   *Payload `json:"payload,omitempty"`
	QueueURL  string   `json:"queueUrl"`
	UseBase64 *bool    `json:"useBase64,omitempty"`
}
