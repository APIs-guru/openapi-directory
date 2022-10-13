package shared

type ReplicaGlobalSecondaryIndexSettingsDescription struct {
	IndexName                                   string                          `json:"IndexName"`
	IndexStatus                                 *IndexStatusEnum                `json:"IndexStatus"`
	ProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription `json:"ProvisionedReadCapacityAutoScalingSettings"`
	ProvisionedReadCapacityUnits                *int64                          `json:"ProvisionedReadCapacityUnits"`
	ProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedWriteCapacityAutoScalingSettings"`
	ProvisionedWriteCapacityUnits               *int64                          `json:"ProvisionedWriteCapacityUnits"`
}
