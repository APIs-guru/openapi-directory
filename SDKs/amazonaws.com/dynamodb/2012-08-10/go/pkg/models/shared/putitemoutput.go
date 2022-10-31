package shared



type PutItemOutput struct {
    Attributes map[string]AttributeValue `json:"Attributes,omitempty"`
    ConsumedCapacity *ConsumedCapacity `json:"ConsumedCapacity,omitempty"`
    ItemCollectionMetrics *ItemCollectionMetrics `json:"ItemCollectionMetrics,omitempty"`
    
}

