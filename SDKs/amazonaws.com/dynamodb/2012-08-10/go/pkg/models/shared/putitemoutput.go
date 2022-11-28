package shared

// PutItemOutput
// Represents the output of a <code>PutItem</code> operation.
type PutItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes,omitempty"`
	ConsumedCapacity      *ConsumedCapacity         `json:"ConsumedCapacity,omitempty"`
	ItemCollectionMetrics *ItemCollectionMetrics    `json:"ItemCollectionMetrics,omitempty"`
}
