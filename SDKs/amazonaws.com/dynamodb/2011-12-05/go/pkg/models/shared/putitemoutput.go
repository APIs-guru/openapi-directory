package shared

type PutItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes"`
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits"`
}
