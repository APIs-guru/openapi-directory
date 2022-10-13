package shared

type PutItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes"`
	ConsumedCapacity      *ConsumedCapacity         `json:"ConsumedCapacity"`
	ItemCollectionMetrics *ItemCollectionMetrics    `json:"ItemCollectionMetrics"`
}
