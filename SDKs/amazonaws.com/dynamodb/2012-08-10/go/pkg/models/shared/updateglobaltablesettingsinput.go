package shared



type UpdateGlobalTableSettingsInput struct {
    GlobalTableBillingMode *BillingModeEnum `json:"GlobalTableBillingMode,omitempty"`
    GlobalTableGlobalSecondaryIndexSettingsUpdate []GlobalTableGlobalSecondaryIndexSettingsUpdate `json:"GlobalTableGlobalSecondaryIndexSettingsUpdate,omitempty"`
    GlobalTableName string `json:"GlobalTableName"`
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate,omitempty"`
    GlobalTableProvisionedWriteCapacityUnits *int64 `json:"GlobalTableProvisionedWriteCapacityUnits,omitempty"`
    ReplicaSettingsUpdate []ReplicaSettingsUpdate `json:"ReplicaSettingsUpdate,omitempty"`
    
}

