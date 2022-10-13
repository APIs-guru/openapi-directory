package shared

type UpdateTableReplicaAutoScalingInput struct {
	GlobalSecondaryIndexUpdates               []GlobalSecondaryIndexAutoScalingUpdate `json:"GlobalSecondaryIndexUpdates"`
	ProvisionedWriteCapacityAutoScalingUpdate *AutoScalingSettingsUpdate              `json:"ProvisionedWriteCapacityAutoScalingUpdate"`
	ReplicaUpdates                            []ReplicaAutoScalingUpdate              `json:"ReplicaUpdates"`
	TableName                                 string                                  `json:"TableName"`
}
