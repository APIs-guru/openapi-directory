package shared

type TransactWriteItemsInput struct {
	ClientRequestToken          *string                          `json:"ClientRequestToken"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum      `json:"ReturnConsumedCapacity"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum `json:"ReturnItemCollectionMetrics"`
	TransactItems               []TransactWriteItem              `json:"TransactItems"`
}
