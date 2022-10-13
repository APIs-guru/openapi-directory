package shared

type CreateTableInput struct {
	AttributeDefinitions   []AttributeDefinition  `json:"AttributeDefinitions"`
	BillingMode            *BillingModeEnum       `json:"BillingMode"`
	GlobalSecondaryIndexes []GlobalSecondaryIndex `json:"GlobalSecondaryIndexes"`
	KeySchema              []KeySchemaElement     `json:"KeySchema"`
	LocalSecondaryIndexes  []LocalSecondaryIndex  `json:"LocalSecondaryIndexes"`
	ProvisionedThroughput  *ProvisionedThroughput `json:"ProvisionedThroughput"`
	SseSpecification       *SseSpecification      `json:"SSESpecification"`
	StreamSpecification    *StreamSpecification   `json:"StreamSpecification"`
	TableName              string                 `json:"TableName"`
	Tags                   []Tag                  `json:"Tags"`
}
