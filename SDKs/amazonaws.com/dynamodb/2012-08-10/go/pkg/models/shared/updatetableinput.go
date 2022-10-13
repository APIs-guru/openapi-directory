package shared

type UpdateTableInput struct {
	AttributeDefinitions        []AttributeDefinition        `json:"AttributeDefinitions"`
	BillingMode                 *BillingModeEnum             `json:"BillingMode"`
	GlobalSecondaryIndexUpdates []GlobalSecondaryIndexUpdate `json:"GlobalSecondaryIndexUpdates"`
	ProvisionedThroughput       *ProvisionedThroughput       `json:"ProvisionedThroughput"`
	ReplicaUpdates              []ReplicationGroupUpdate     `json:"ReplicaUpdates"`
	SseSpecification            *SseSpecification            `json:"SSESpecification"`
	StreamSpecification         *StreamSpecification         `json:"StreamSpecification"`
	TableName                   string                       `json:"TableName"`
}
