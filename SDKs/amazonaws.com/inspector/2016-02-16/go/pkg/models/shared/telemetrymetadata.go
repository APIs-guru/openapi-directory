package shared

// TelemetryMetadata
// The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
type TelemetryMetadata struct {
	Count       int64  `json:"count"`
	DataSize    *int64 `json:"dataSize,omitempty"`
	MessageType string `json:"messageType"`
}
