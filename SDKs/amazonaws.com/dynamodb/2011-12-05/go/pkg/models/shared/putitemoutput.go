package shared

type PutItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes,omitempty"`
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits,omitempty"`
}
