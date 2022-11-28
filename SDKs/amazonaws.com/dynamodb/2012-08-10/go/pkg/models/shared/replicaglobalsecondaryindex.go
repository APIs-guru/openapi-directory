package shared

// ReplicaGlobalSecondaryIndex
// Represents the properties of a replica global secondary index.
type ReplicaGlobalSecondaryIndex struct {
	IndexName                     string                         `json:"IndexName"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
}
