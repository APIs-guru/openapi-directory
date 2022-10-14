package shared

type TransactWriteItemsInput struct {
	ClientRequestToken          *string                          `json:"ClientRequestToken,omitempty"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum      `json:"ReturnConsumedCapacity,omitempty"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum `json:"ReturnItemCollectionMetrics,omitempty"`
	TransactItems               []TransactWriteItem              `json:"TransactItems"`
}
