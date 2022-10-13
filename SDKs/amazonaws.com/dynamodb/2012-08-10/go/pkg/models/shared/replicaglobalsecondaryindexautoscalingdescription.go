package shared

type ReplicaGlobalSecondaryIndexAutoScalingDescription struct {
	IndexName                                   *string                         `json:"IndexName"`
	IndexStatus                                 *IndexStatusEnum                `json:"IndexStatus"`
	ProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription `json:"ProvisionedReadCapacityAutoScalingSettings"`
	ProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedWriteCapacityAutoScalingSettings"`
}
