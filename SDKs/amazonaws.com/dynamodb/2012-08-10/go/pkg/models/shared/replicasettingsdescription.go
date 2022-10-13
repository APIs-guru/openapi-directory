package shared

type ReplicaSettingsDescription struct {
	RegionName                                         string                                           `json:"RegionName"`
	ReplicaBillingModeSummary                          *BillingModeSummary                              `json:"ReplicaBillingModeSummary"`
	ReplicaGlobalSecondaryIndexSettings                []ReplicaGlobalSecondaryIndexSettingsDescription `json:"ReplicaGlobalSecondaryIndexSettings"`
	ReplicaProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription                  `json:"ReplicaProvisionedReadCapacityAutoScalingSettings"`
	ReplicaProvisionedReadCapacityUnits                *int64                                           `json:"ReplicaProvisionedReadCapacityUnits"`
	ReplicaProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription                  `json:"ReplicaProvisionedWriteCapacityAutoScalingSettings"`
	ReplicaProvisionedWriteCapacityUnits               *int64                                           `json:"ReplicaProvisionedWriteCapacityUnits"`
	ReplicaStatus                                      *ReplicaStatusEnum                               `json:"ReplicaStatus"`
}
