package shared

type UpdateTableInput struct {
	AttributeDefinitions        []AttributeDefinition        `json:"AttributeDefinitions,omitempty"`
	BillingMode                 *BillingModeEnum             `json:"BillingMode,omitempty"`
	GlobalSecondaryIndexUpdates []GlobalSecondaryIndexUpdate `json:"GlobalSecondaryIndexUpdates,omitempty"`
	ProvisionedThroughput       *ProvisionedThroughput       `json:"ProvisionedThroughput,omitempty"`
	ReplicaUpdates              []ReplicationGroupUpdate     `json:"ReplicaUpdates,omitempty"`
	SseSpecification            *SseSpecification            `json:"SSESpecification,omitempty"`
	StreamSpecification         *StreamSpecification         `json:"StreamSpecification,omitempty"`
	TableName                   string                       `json:"TableName"`
}
