package shared

// Message
// Information about a message.
type Message struct {
	MessageID string `json:"messageId"`
	Payload   string `json:"payload"`
}
