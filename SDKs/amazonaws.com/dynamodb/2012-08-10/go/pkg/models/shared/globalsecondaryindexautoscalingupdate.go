package shared



type GlobalSecondaryIndexAutoScalingUpdate struct {
    IndexName *string `json:"IndexName,omitempty"`
    ProvisionedWriteCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingUpdate,omitempty"`
    
}

