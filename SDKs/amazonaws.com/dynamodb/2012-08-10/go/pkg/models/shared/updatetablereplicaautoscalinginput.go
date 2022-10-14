package shared

type UpdateTableReplicaAutoScalingInput struct {
	GlobalSecondaryIndexUpdates               []GlobalSecondaryIndexAutoScalingUpdate `json:"GlobalSecondaryIndexUpdates,omitempty"`
	ProvisionedWriteCapacityAutoScalingUpdate *AutoScalingSettingsUpdate              `json:"ProvisionedWriteCapacityAutoScalingUpdate,omitempty"`
	ReplicaUpdates                            []ReplicaAutoScalingUpdate              `json:"ReplicaUpdates,omitempty"`
	TableName                                 string                                  `json:"TableName"`
}
