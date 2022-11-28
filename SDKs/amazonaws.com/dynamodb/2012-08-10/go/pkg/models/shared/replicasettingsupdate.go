package shared

// ReplicaSettingsUpdate
// Represents the settings for a global table in a Region that will be modified.
type ReplicaSettingsUpdate struct {
	RegionName                                              string                                      `json:"RegionName"`
	ReplicaGlobalSecondaryIndexSettingsUpdate               []ReplicaGlobalSecondaryIndexSettingsUpdate `json:"ReplicaGlobalSecondaryIndexSettingsUpdate,omitempty"`
	ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate                  `json:"ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate,omitempty"`
	ReplicaProvisionedReadCapacityUnits                     *int64                                      `json:"ReplicaProvisionedReadCapacityUnits,omitempty"`
}
