package shared

type SqsAction struct {
	Payload   *Payload `json:"payload"`
	QueueURL  string   `json:"queueUrl"`
	UseBase64 *bool    `json:"useBase64"`
}
