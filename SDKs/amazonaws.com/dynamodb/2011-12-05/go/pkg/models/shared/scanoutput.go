package shared



type ScanOutput struct {
    ConsumedCapacityUnits *float64 `json:"ConsumedCapacityUnits,omitempty"`
    Count *int64 `json:"Count,omitempty"`
    Items []map[string]AttributeValue `json:"Items,omitempty"`
    LastEvaluatedKey *Key `json:"LastEvaluatedKey,omitempty"`
    ScannedCount *int64 `json:"ScannedCount,omitempty"`
    
}

