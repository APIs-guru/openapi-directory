package shared

type SqsAction struct {
	Payload   *Payload `json:"payload,omitempty"`
	QueueURL  string   `json:"queueUrl"`
	UseBase64 *bool    `json:"useBase64,omitempty"`
}
