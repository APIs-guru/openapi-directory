package shared

// DeltaSyncConfig
// Describes a Delta Sync configuration.
type DeltaSyncConfig struct {
	BaseTableTTL       *int64  `json:"baseTableTTL,omitempty"`
	DeltaSyncTableName *string `json:"deltaSyncTableName,omitempty"`
	DeltaSyncTableTTL  *int64  `json:"deltaSyncTableTTL,omitempty"`
}
