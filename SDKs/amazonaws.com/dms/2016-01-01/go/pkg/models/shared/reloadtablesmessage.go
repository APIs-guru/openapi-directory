package shared



type ReloadTablesMessage struct {
    ReloadOption *ReloadOptionValueEnum `json:"ReloadOption,omitempty"`
    ReplicationTaskArn string `json:"ReplicationTaskArn"`
    TablesToReload []TableToReload `json:"TablesToReload"`
    
}

