package shared

type ReplicaAutoScalingDescription struct {
	GlobalSecondaryIndexes                             []ReplicaGlobalSecondaryIndexAutoScalingDescription `json:"GlobalSecondaryIndexes"`
	RegionName                                         *string                                             `json:"RegionName"`
	ReplicaProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription                     `json:"ReplicaProvisionedReadCapacityAutoScalingSettings"`
	ReplicaProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription                     `json:"ReplicaProvisionedWriteCapacityAutoScalingSettings"`
	ReplicaStatus                                      *ReplicaStatusEnum                                  `json:"ReplicaStatus"`
}
