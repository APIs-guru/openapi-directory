package shared

// UpdateItemOutput
// Represents the output of an <code>UpdateItem</code> operation.
type UpdateItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes,omitempty"`
	ConsumedCapacity      *ConsumedCapacity         `json:"ConsumedCapacity,omitempty"`
	ItemCollectionMetrics *ItemCollectionMetrics    `json:"ItemCollectionMetrics,omitempty"`
}
