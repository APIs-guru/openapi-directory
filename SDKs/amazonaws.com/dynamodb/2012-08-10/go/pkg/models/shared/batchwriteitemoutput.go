package shared

type BatchWriteItemOutput struct {
	ConsumedCapacity      []ConsumedCapacity                 `json:"ConsumedCapacity"`
	ItemCollectionMetrics map[string][]ItemCollectionMetrics `json:"ItemCollectionMetrics"`
	UnprocessedItems      map[string][]WriteRequest          `json:"UnprocessedItems"`
}
