package shared

// CreateReplicationGroupMemberAction
// Represents a replica to be created.
type CreateReplicationGroupMemberAction struct {
	GlobalSecondaryIndexes        []ReplicaGlobalSecondaryIndex  `json:"GlobalSecondaryIndexes,omitempty"`
	KmsMasterKeyID                *string                        `json:"KMSMasterKeyId,omitempty"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
	RegionName                    string                         `json:"RegionName"`
}
