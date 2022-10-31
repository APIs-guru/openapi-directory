package shared

type TransactWriteItemsOutput struct {
	ConsumedCapacity      []ConsumedCapacity                 `json:"ConsumedCapacity,omitempty"`
	ItemCollectionMetrics map[string][]ItemCollectionMetrics `json:"ItemCollectionMetrics,omitempty"`
}
