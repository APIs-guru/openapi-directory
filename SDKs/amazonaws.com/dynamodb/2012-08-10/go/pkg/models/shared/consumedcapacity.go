package shared

type ConsumedCapacity struct {
	CapacityUnits          *float64            `json:"CapacityUnits"`
	GlobalSecondaryIndexes map[string]Capacity `json:"GlobalSecondaryIndexes"`
	LocalSecondaryIndexes  map[string]Capacity `json:"LocalSecondaryIndexes"`
	ReadCapacityUnits      *float64            `json:"ReadCapacityUnits"`
	Table                  *Capacity           `json:"Table"`
	TableName              *string             `json:"TableName"`
	WriteCapacityUnits     *float64            `json:"WriteCapacityUnits"`
}
