package shared

type DescribeGlobalTableSettingsOutput struct {
	GlobalTableName *string                      `json:"GlobalTableName"`
	ReplicaSettings []ReplicaSettingsDescription `json:"ReplicaSettings"`
}
