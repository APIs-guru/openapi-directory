package shared

type UpdateGlobalSecondaryIndexAction struct {
	IndexName             string                `json:"IndexName"`
	ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
}
