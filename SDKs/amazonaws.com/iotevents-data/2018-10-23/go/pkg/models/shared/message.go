package shared

// Message
// Information about a message.
type Message struct {
	InputName string          `json:"inputName"`
	MessageID string          `json:"messageId"`
	Payload   string          `json:"payload"`
	Timestamp *TimestampValue `json:"timestamp,omitempty"`
}
