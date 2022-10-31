package shared



type BatchGetItemOutput struct {
    ConsumedCapacity []ConsumedCapacity `json:"ConsumedCapacity,omitempty"`
    Responses map[string][]map[string]AttributeValue `json:"Responses,omitempty"`
    UnprocessedKeys map[string]KeysAndAttributes `json:"UnprocessedKeys,omitempty"`
    
}

