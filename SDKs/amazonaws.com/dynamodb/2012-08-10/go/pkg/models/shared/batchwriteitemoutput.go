package shared

// BatchWriteItemOutput
// Represents the output of a <code>BatchWriteItem</code> operation.
type BatchWriteItemOutput struct {
	ConsumedCapacity      []ConsumedCapacity                 `json:"ConsumedCapacity,omitempty"`
	ItemCollectionMetrics map[string][]ItemCollectionMetrics `json:"ItemCollectionMetrics,omitempty"`
	UnprocessedItems      map[string][]WriteRequest          `json:"UnprocessedItems,omitempty"`
}
