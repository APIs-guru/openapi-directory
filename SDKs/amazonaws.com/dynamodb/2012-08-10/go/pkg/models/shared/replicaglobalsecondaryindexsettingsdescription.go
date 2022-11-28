package shared

// ReplicaGlobalSecondaryIndexSettingsDescription
// Represents the properties of a global secondary index.
type ReplicaGlobalSecondaryIndexSettingsDescription struct {
	IndexName                                   string                          `json:"IndexName"`
	IndexStatus                                 *IndexStatusEnum                `json:"IndexStatus,omitempty"`
	ProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription `json:"ProvisionedReadCapacityAutoScalingSettings,omitempty"`
	ProvisionedReadCapacityUnits                *int64                          `json:"ProvisionedReadCapacityUnits,omitempty"`
	ProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedWriteCapacityAutoScalingSettings,omitempty"`
	ProvisionedWriteCapacityUnits               *int64                          `json:"ProvisionedWriteCapacityUnits,omitempty"`
}
