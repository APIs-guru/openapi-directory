package shared

type OrderableReplicationInstance struct {
	AvailabilityZones        []string                 `json:"AvailabilityZones"`
	DefaultAllocatedStorage  *int64                   `json:"DefaultAllocatedStorage"`
	EngineVersion            *string                  `json:"EngineVersion"`
	IncludedAllocatedStorage *int64                   `json:"IncludedAllocatedStorage"`
	MaxAllocatedStorage      *int64                   `json:"MaxAllocatedStorage"`
	MinAllocatedStorage      *int64                   `json:"MinAllocatedStorage"`
	ReleaseStatus            *ReleaseStatusValuesEnum `json:"ReleaseStatus"`
	ReplicationInstanceClass *string                  `json:"ReplicationInstanceClass"`
	StorageType              *string                  `json:"StorageType"`
}
