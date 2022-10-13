package shared

type UpdateGlobalTableSettingsOutput struct {
	GlobalTableName *string                      `json:"GlobalTableName"`
	ReplicaSettings []ReplicaSettingsDescription `json:"ReplicaSettings"`
}
