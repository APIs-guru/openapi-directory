package shared

// ReplicaGlobalSecondaryIndexAutoScalingDescription
// Represents the auto scaling configuration for a replica global secondary index.
type ReplicaGlobalSecondaryIndexAutoScalingDescription struct {
	IndexName                                   *string                         `json:"IndexName,omitempty"`
	IndexStatus                                 *IndexStatusEnum                `json:"IndexStatus,omitempty"`
	ProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription `json:"ProvisionedReadCapacityAutoScalingSettings,omitempty"`
	ProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedWriteCapacityAutoScalingSettings,omitempty"`
}
