package shared



type TransactGetItemsOutput struct {
    ConsumedCapacity []ConsumedCapacity `json:"ConsumedCapacity,omitempty"`
    Responses []ItemResponse `json:"Responses,omitempty"`
    
}

