package shared

type ReplicaSettingsUpdate struct {
	RegionName                                              string                                      `json:"RegionName"`
	ReplicaGlobalSecondaryIndexSettingsUpdate               []ReplicaGlobalSecondaryIndexSettingsUpdate `json:"ReplicaGlobalSecondaryIndexSettingsUpdate"`
	ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate                  `json:"ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate"`
	ReplicaProvisionedReadCapacityUnits                     *int64                                      `json:"ReplicaProvisionedReadCapacityUnits"`
}
