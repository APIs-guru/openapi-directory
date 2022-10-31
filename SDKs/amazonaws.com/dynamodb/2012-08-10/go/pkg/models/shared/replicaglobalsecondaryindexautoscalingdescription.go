package shared



type ReplicaGlobalSecondaryIndexAutoScalingDescription struct {
    IndexName *string `json:"IndexName,omitempty"`
    IndexStatus *IndexStatusEnum `json:"IndexStatus,omitempty"`
    ProvisionedReadCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedReadCapacityAutoScalingSettings,omitempty"`
    ProvisionedWriteCapacityAutoScalingSettings *AutoScalingSettingsDescription `json:"ProvisionedWriteCapacityAutoScalingSettings,omitempty"`
    
}

