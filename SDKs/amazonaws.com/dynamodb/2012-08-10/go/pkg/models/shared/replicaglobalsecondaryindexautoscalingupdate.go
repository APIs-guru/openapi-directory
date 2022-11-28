package shared

// ReplicaGlobalSecondaryIndexAutoScalingUpdate
// Represents the auto scaling settings of a global secondary index for a replica that will be modified.
type ReplicaGlobalSecondaryIndexAutoScalingUpdate struct {
	IndexName                                *string                    `json:"IndexName,omitempty"`
	ProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedReadCapacityAutoScalingUpdate,omitempty"`
}
