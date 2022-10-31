package shared



type ConsumedCapacity struct {
    CapacityUnits *float64 `json:"CapacityUnits,omitempty"`
    GlobalSecondaryIndexes map[string]Capacity `json:"GlobalSecondaryIndexes,omitempty"`
    LocalSecondaryIndexes map[string]Capacity `json:"LocalSecondaryIndexes,omitempty"`
    ReadCapacityUnits *float64 `json:"ReadCapacityUnits,omitempty"`
    Table *Capacity `json:"Table,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    WriteCapacityUnits *float64 `json:"WriteCapacityUnits,omitempty"`
    
}

