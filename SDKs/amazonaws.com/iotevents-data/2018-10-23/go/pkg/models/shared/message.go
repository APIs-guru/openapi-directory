package shared

type Message struct {
	InputName string          `json:"inputName"`
	MessageID string          `json:"messageId"`
	Payload   string          `json:"payload"`
	Timestamp *TimestampValue `json:"timestamp,omitempty"`
}
