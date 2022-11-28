package shared

// ReplicaAutoScalingDescription
// Represents the auto scaling settings of the replica.
type ReplicaAutoScalingDescription struct {
	GlobalSecondaryIndexes                             []ReplicaGlobalSecondaryIndexAutoScalingDescription `json:"GlobalSecondaryIndexes,omitempty"`
	RegionName                                         *string                                             `json:"RegionName,omitempty"`
	ReplicaProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription                     `json:"ReplicaProvisionedReadCapacityAutoScalingSettings,omitempty"`
	ReplicaProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription                     `json:"ReplicaProvisionedWriteCapacityAutoScalingSettings,omitempty"`
	ReplicaStatus                                      *ReplicaStatusEnum                                  `json:"ReplicaStatus,omitempty"`
}
