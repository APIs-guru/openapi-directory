package shared



type BatchWriteItemOutput struct {
    ConsumedCapacity []ConsumedCapacity `json:"ConsumedCapacity,omitempty"`
    ItemCollectionMetrics map[string][]ItemCollectionMetrics `json:"ItemCollectionMetrics,omitempty"`
    UnprocessedItems map[string][]WriteRequest `json:"UnprocessedItems,omitempty"`
    
}

