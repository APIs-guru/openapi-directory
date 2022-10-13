package shared

type GetItemOutput struct {
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits"`
	Item                  map[string]AttributeValue `json:"Item"`
}
