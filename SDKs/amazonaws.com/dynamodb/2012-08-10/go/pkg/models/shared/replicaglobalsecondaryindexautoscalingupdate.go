package shared



type ReplicaGlobalSecondaryIndexAutoScalingUpdate struct {
    IndexName *string `json:"IndexName,omitempty"`
    ProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedReadCapacityAutoScalingUpdate,omitempty"`
    
}

