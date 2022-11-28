package shared

// OrderableReplicationInstance
// In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
type OrderableReplicationInstance struct {
	AvailabilityZones        []string                 `json:"AvailabilityZones,omitempty"`
	DefaultAllocatedStorage  *int64                   `json:"DefaultAllocatedStorage,omitempty"`
	EngineVersion            *string                  `json:"EngineVersion,omitempty"`
	IncludedAllocatedStorage *int64                   `json:"IncludedAllocatedStorage,omitempty"`
	MaxAllocatedStorage      *int64                   `json:"MaxAllocatedStorage,omitempty"`
	MinAllocatedStorage      *int64                   `json:"MinAllocatedStorage,omitempty"`
	ReleaseStatus            *ReleaseStatusValuesEnum `json:"ReleaseStatus,omitempty"`
	ReplicationInstanceClass *string                  `json:"ReplicationInstanceClass,omitempty"`
	StorageType              *string                  `json:"StorageType,omitempty"`
}
