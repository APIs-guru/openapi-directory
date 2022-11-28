package shared

// UpdateGlobalSecondaryIndexAction
// Represents the new provisioned throughput settings to be applied to a global secondary index.
type UpdateGlobalSecondaryIndexAction struct {
	IndexName             string                `json:"IndexName"`
	ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
}
