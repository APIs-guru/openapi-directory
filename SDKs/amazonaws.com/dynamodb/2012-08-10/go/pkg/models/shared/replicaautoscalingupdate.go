package shared



type ReplicaAutoScalingUpdate struct {
    RegionName string `json:"RegionName"`
    ReplicaGlobalSecondaryIndexUpdates []ReplicaGlobalSecondaryIndexAutoScalingUpdate `json:"ReplicaGlobalSecondaryIndexUpdates,omitempty"`
    ReplicaProvisionedReadCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ReplicaProvisionedReadCapacityAutoScalingUpdate,omitempty"`
    
}

