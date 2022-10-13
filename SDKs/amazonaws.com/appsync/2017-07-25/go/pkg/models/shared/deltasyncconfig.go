package shared

type DeltaSyncConfig struct {
	BaseTableTTL       *int64  `json:"baseTableTTL"`
	DeltaSyncTableName *string `json:"deltaSyncTableName"`
	DeltaSyncTableTTL  *int64  `json:"deltaSyncTableTTL"`
}
