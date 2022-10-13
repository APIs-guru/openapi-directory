package shared

type UpdateItemOutput struct {
	Attributes            map[string]AttributeValue `json:"Attributes"`
	ConsumedCapacityUnits *float64                  `json:"ConsumedCapacityUnits"`
}
