package shared

type ReplicaGlobalSecondaryIndexAutoScalingUpdate struct {
	IndexName                                *string                    `json:"IndexName"`
	ProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedReadCapacityAutoScalingUpdate"`
}
