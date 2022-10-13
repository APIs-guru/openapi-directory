package shared

type ReplicaGlobalSecondaryIndexSettingsUpdate struct {
	IndexName                                        string                     `json:"IndexName"`
	ProvisionedReadCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"ProvisionedReadCapacityAutoScalingSettingsUpdate"`
	ProvisionedReadCapacityUnits                     *int64                     `json:"ProvisionedReadCapacityUnits"`
}
