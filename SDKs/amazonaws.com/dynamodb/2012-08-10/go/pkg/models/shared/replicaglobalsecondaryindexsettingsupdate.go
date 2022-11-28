package shared

// ReplicaGlobalSecondaryIndexSettingsUpdate
// Represents the settings of a global secondary index for a global table that will be modified.
type ReplicaGlobalSecondaryIndexSettingsUpdate struct {
	IndexName                                        string                     `json:"IndexName"`
	ProvisionedReadCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"ProvisionedReadCapacityAutoScalingSettingsUpdate,omitempty"`
	ProvisionedReadCapacityUnits                     *int64                     `json:"ProvisionedReadCapacityUnits,omitempty"`
}
