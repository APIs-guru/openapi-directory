package shared

// ReplicaAutoScalingUpdate
// Represents the auto scaling settings of a replica that will be modified.
type ReplicaAutoScalingUpdate struct {
	RegionName                                      string                                         `json:"RegionName"`
	ReplicaGlobalSecondaryIndexUpdates              []ReplicaGlobalSecondaryIndexAutoScalingUpdate `json:"ReplicaGlobalSecondaryIndexUpdates,omitempty"`
	ReplicaProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate                     `json:"ReplicaProvisionedReadCapacityAutoScalingUpdate,omitempty"`
}
