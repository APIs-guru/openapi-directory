package shared

type GetItemOutput struct {
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits,omitempty"`
	Item                  map[string]AttributeValue `json:"Item,omitempty"`
}
