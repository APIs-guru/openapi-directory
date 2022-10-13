package shared

type TransactWriteItemsOutput struct {
	ConsumedCapacity      []ConsumedCapacity                 `json:"ConsumedCapacity"`
	ItemCollectionMetrics map[string][]ItemCollectionMetrics `json:"ItemCollectionMetrics"`
}
