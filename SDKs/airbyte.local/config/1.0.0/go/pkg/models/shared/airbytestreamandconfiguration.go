package shared

// AirbyteStreamAndConfiguration
// each stream is split in two parts; the immutable schema from source and mutable configuration for destination
type AirbyteStreamAndConfiguration struct {
	Config *AirbyteStreamConfiguration `json:"config,omitempty"`
	Stream *AirbyteStream              `json:"stream,omitempty"`
}
