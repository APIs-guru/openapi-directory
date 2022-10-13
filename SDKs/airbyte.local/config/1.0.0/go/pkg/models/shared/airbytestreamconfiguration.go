package shared

type AirbyteStreamConfiguration struct {
	AliasName           *string                 `json:"aliasName"`
	CursorField         []string                `json:"cursorField"`
	DestinationSyncMode DestinationSyncModeEnum `json:"destinationSyncMode"`
	PrimaryKey          [][]string              `json:"primaryKey"`
	Selected            *bool                   `json:"selected"`
	SyncMode            SyncModeEnum            `json:"syncMode"`
}
