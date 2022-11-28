package shared

// AirbyteStream
// the immutable schema defined by the source
type AirbyteStream struct {
	DefaultCursorField      []string               `json:"defaultCursorField,omitempty"`
	JSONSchema              map[string]interface{} `json:"jsonSchema,omitempty"`
	Name                    string                 `json:"name"`
	Namespace               *string                `json:"namespace,omitempty"`
	SourceDefinedCursor     *bool                  `json:"sourceDefinedCursor,omitempty"`
	SourceDefinedPrimaryKey [][]string             `json:"sourceDefinedPrimaryKey,omitempty"`
	SupportedSyncModes      []SyncModeEnum         `json:"supportedSyncModes,omitempty"`
}
