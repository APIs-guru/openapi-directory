package shared

type ScanOutput struct {
	ConsumedCapacityUnits *float64                    `json:"ConsumedCapacityUnits"`
	Count                 *int64                      `json:"Count"`
	Items                 []map[string]AttributeValue `json:"Items"`
	LastEvaluatedKey      *Key                        `json:"LastEvaluatedKey"`
	ScannedCount          *int64                      `json:"ScannedCount"`
}
