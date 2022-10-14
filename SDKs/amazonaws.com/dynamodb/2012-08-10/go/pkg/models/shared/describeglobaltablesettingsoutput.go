package shared

type DescribeGlobalTableSettingsOutput struct {
	GlobalTableName *string                      `json:"GlobalTableName,omitempty"`
	ReplicaSettings []ReplicaSettingsDescription `json:"ReplicaSettings,omitempty"`
}
