package shared

type Message struct {
	MessageID string `json:"messageId"`
	Payload   string `json:"payload"`
}
