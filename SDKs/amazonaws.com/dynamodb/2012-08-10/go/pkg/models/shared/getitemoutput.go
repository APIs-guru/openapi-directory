package shared



type GetItemOutput struct {
    ConsumedCapacity *ConsumedCapacity `json:"ConsumedCapacity,omitempty"`
    Item map[string]AttributeValue `json:"Item,omitempty"`
    
}

