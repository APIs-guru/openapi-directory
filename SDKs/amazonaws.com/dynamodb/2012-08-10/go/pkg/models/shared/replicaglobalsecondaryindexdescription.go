package shared

type ReplicaGlobalSecondaryIndexDescription struct {
	IndexName                     *string                        `json:"IndexName"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride"`
}
