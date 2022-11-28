package shared

// AirbyteStreamConfiguration
// the mutable part of the stream to configure the destination
type AirbyteStreamConfiguration struct {
	AliasName           *string                 `json:"aliasName,omitempty"`
	CursorField         []string                `json:"cursorField,omitempty"`
	DestinationSyncMode DestinationSyncModeEnum `json:"destinationSyncMode"`
	PrimaryKey          [][]string              `json:"primaryKey,omitempty"`
	Selected            *bool                   `json:"selected,omitempty"`
	SyncMode            SyncModeEnum            `json:"syncMode"`
}
