package shared

type AirbyteStream struct {
	DefaultCursorField      []string               `json:"defaultCursorField"`
	JSONSchema              map[string]interface{} `json:"jsonSchema"`
	Name                    string                 `json:"name"`
	Namespace               *string                `json:"namespace"`
	SourceDefinedCursor     *bool                  `json:"sourceDefinedCursor"`
	SourceDefinedPrimaryKey [][]string             `json:"sourceDefinedPrimaryKey"`
	SupportedSyncModes      []SyncModeEnum         `json:"supportedSyncModes"`
}
