package shared

// UpdateReplicationGroupMemberAction
// Represents a replica to be modified.
type UpdateReplicationGroupMemberAction struct {
	GlobalSecondaryIndexes        []ReplicaGlobalSecondaryIndex  `json:"GlobalSecondaryIndexes,omitempty"`
	KmsMasterKeyID                *string                        `json:"KMSMasterKeyId,omitempty"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride,omitempty"`
	RegionName                    string                         `json:"RegionName"`
}
