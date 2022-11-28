package shared

// BatchWriteItemInput
// Represents the input of a <code>BatchWriteItem</code> operation.
type BatchWriteItemInput struct {
	RequestItems                map[string][]WriteRequest        `json:"RequestItems"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum      `json:"ReturnConsumedCapacity,omitempty"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum `json:"ReturnItemCollectionMetrics,omitempty"`
}
