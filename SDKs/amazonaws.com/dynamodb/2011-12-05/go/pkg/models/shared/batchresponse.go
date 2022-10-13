package shared

type BatchResponse struct {
	ConsumedCapacityUnits *float64                    `json:"ConsumedCapacityUnits"`
	Items                 []map[string]AttributeValue `json:"Items"`
}
