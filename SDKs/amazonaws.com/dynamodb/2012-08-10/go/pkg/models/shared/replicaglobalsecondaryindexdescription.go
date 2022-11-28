package shared

// ReplicaGlobalSecondaryIndexDescription
// Represents the properties of a replica global secondary index.
type ReplicaGlobalSecondaryIndexDescription struct {
	IndexName                     *string                        `json:"IndexName,omitempty"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
}
