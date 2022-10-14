package shared

type ReplicaSettingsDescription struct {
	RegionName                                         string                                           `json:"RegionName"`
	ReplicaBillingModeSummary                          *BillingModeSummary                              `json:"ReplicaBillingModeSummary,omitempty"`
	ReplicaGlobalSecondaryIndexSettings                []ReplicaGlobalSecondaryIndexSettingsDescription `json:"ReplicaGlobalSecondaryIndexSettings,omitempty"`
	ReplicaProvisionedReadCapacityAutoScalingSettings  *AutoScalingSettingsDescription                  `json:"ReplicaProvisionedReadCapacityAutoScalingSettings,omitempty"`
	ReplicaProvisionedReadCapacityUnits                *int64                                           `json:"ReplicaProvisionedReadCapacityUnits,omitempty"`
	ReplicaProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription                  `json:"ReplicaProvisionedWriteCapacityAutoScalingSettings,omitempty"`
	ReplicaProvisionedWriteCapacityUnits               *int64                                           `json:"ReplicaProvisionedWriteCapacityUnits,omitempty"`
	ReplicaStatus                                      *ReplicaStatusEnum                               `json:"ReplicaStatus,omitempty"`
}
