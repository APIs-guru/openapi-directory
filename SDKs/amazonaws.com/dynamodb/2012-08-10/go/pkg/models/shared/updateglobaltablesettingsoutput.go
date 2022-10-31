package shared



type UpdateGlobalTableSettingsOutput struct {
    GlobalTableName *string `json:"GlobalTableName,omitempty"`
    ReplicaSettings []ReplicaSettingsDescription `json:"ReplicaSettings,omitempty"`
    
}

