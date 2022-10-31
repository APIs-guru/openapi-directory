package shared



type ReplicaGlobalSecondaryIndexDescription struct {
    IndexName *string `json:"IndexName,omitempty"`
    ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
    
}

