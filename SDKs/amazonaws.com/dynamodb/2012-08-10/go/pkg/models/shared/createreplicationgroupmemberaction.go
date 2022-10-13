package shared

type CreateReplicationGroupMemberAction struct {
	GlobalSecondaryIndexes        []ReplicaGlobalSecondaryIndex  `json:"GlobalSecondaryIndexes"`
	KmsMasterKeyID                *string                        `json:"KMSMasterKeyId"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride"`
	RegionName                    string                         `json:"RegionName"`
}
