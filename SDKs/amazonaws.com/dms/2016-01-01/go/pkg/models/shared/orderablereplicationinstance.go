package shared



type OrderableReplicationInstance struct {
    AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
    DefaultAllocatedStorage *int64 `json:"DefaultAllocatedStorage,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    IncludedAllocatedStorage *int64 `json:"IncludedAllocatedStorage,omitempty"`
    MaxAllocatedStorage *int64 `json:"MaxAllocatedStorage,omitempty"`
    MinAllocatedStorage *int64 `json:"MinAllocatedStorage,omitempty"`
    ReleaseStatus *ReleaseStatusValuesEnum `json:"ReleaseStatus,omitempty"`
    ReplicationInstanceClass *string `json:"ReplicationInstanceClass,omitempty"`
    StorageType *string `json:"StorageType,omitempty"`
    
}

