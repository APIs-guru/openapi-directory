package shared



type GlobalTableGlobalSecondaryIndexSettingsUpdate struct {
    IndexName string `json:"IndexName"`
    ProvisionedWriteCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingSettingsUpdate,omitempty"`
    ProvisionedWriteCapacityUnits *int64 `json:"ProvisionedWriteCapacityUnits,omitempty"`
    
}

