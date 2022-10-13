package shared

type BatchWriteItemInput struct {
	RequestItems                map[string][]WriteRequest        `json:"RequestItems"`
	ReturnConsumedCapacity      *ReturnConsumedCapacityEnum      `json:"ReturnConsumedCapacity"`
	ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum `json:"ReturnItemCollectionMetrics"`
}
