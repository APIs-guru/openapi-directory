package shared

// SerDeInfo
// Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
type SerDeInfo struct {
	Name                 *string           `json:"Name,omitempty"`
	Parameters           map[string]string `json:"Parameters,omitempty"`
	SerializationLibrary *string           `json:"SerializationLibrary,omitempty"`
}
