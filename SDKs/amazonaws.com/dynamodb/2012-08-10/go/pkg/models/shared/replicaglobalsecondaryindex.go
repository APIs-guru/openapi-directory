package shared

type ReplicaGlobalSecondaryIndex struct {
	IndexName                     string                         `json:"IndexName"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride `json:"ProvisionedThroughputOverride"`
}
