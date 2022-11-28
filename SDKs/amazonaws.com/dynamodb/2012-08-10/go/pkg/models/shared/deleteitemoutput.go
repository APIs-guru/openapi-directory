package shared

// DeleteItemOutput
// Represents the output of a <code>DeleteItem</code> operation.
type DeleteItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes,omitempty"`
	ConsumedCapacity      *ConsumedCapacity         `json:"ConsumedCapacity,omitempty"`
	ItemCollectionMetrics *ItemCollectionMetrics    `json:"ItemCollectionMetrics,omitempty"`
}
