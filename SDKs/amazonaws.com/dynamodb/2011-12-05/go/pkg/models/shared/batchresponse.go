package shared

type BatchResponse struct {
	ConsumedCapacityUnits *float64                    `json:"ConsumedCapacityUnits,omitempty"`
	Items                 []map[string]AttributeValue `json:"Items,omitempty"`
}
