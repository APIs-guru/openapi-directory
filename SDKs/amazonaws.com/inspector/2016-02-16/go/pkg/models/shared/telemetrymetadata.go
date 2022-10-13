package shared

type TelemetryMetadata struct {
	Count       int64  `json:"count"`
	DataSize    *int64 `json:"dataSize"`
	MessageType string `json:"messageType"`
}
