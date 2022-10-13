package shared

type ReloadTablesMessage struct {
	ReloadOption       *ReloadOptionValueEnum `json:"ReloadOption"`
	ReplicationTaskArn string                 `json:"ReplicationTaskArn"`
	TablesToReload     []TableToReload        `json:"TablesToReload"`
}
