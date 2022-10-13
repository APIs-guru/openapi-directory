package shared

type UpdateGlobalTableSettingsInput struct {
	GlobalTableBillingMode                                       *BillingModeEnum                                `json:"GlobalTableBillingMode"`
	GlobalTableGlobalSecondaryIndexSettingsUpdate                []GlobalTableGlobalSecondaryIndexSettingsUpdate `json:"GlobalTableGlobalSecondaryIndexSettingsUpdate"`
	GlobalTableName                                              string                                          `json:"GlobalTableName"`
	GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate                      `json:"GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate"`
	GlobalTableProvisionedWriteCapacityUnits                     *int64                                          `json:"GlobalTableProvisionedWriteCapacityUnits"`
	ReplicaSettingsUpdate                                        []ReplicaSettingsUpdate                         `json:"ReplicaSettingsUpdate"`
}
