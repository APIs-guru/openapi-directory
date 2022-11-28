package shared

// CreateTableInput
// Represents the input of a <code>CreateTable</code> operation.
type CreateTableInput struct {
	AttributeDefinitions   []AttributeDefinition  `json:"AttributeDefinitions"`
	BillingMode            *BillingModeEnum       `json:"BillingMode,omitempty"`
	GlobalSecondaryIndexes []GlobalSecondaryIndex `json:"GlobalSecondaryIndexes,omitempty"`
	KeySchema              []KeySchemaElement     `json:"KeySchema"`
	LocalSecondaryIndexes  []LocalSecondaryIndex  `json:"LocalSecondaryIndexes,omitempty"`
	ProvisionedThroughput  *ProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
	SseSpecification       *SseSpecification      `json:"SSESpecification,omitempty"`
	StreamSpecification    *StreamSpecification   `json:"StreamSpecification,omitempty"`
	TableName              string                 `json:"TableName"`
	Tags                   []Tag                  `json:"Tags,omitempty"`
}
