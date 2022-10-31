package shared



type BatchWriteItemInput struct {
    RequestItems map[string][]WriteRequest `json:"RequestItems"`
    ReturnConsumedCapacity *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity,omitempty"`
    ReturnItemCollectionMetrics *ReturnItemCollectionMetricsEnum `json:"ReturnItemCollectionMetrics,omitempty"`
    
}

