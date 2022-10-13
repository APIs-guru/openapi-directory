package shared

type DeleteItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes"`
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits"`
}
