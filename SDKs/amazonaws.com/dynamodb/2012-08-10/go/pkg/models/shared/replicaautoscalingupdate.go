package shared

type ReplicaAutoScalingUpdate struct {
	RegionName                                      string                                         `json:"RegionName"`
	ReplicaGlobalSecondaryIndexUpdates              []ReplicaGlobalSecondaryIndexAutoScalingUpdate `json:"ReplicaGlobalSecondaryIndexUpdates"`
	ReplicaProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate                     `json:"ReplicaProvisionedReadCapacityAutoScalingUpdate"`
}
