package shared



type DeleteItemOutput struct {
    Attributes map[string]AttributeValue `json:"Attributes,omitempty"`
    ConsumedCapacityUnits *float64 `json:"ConsumedCapacityUnits,omitempty"`
    
}

