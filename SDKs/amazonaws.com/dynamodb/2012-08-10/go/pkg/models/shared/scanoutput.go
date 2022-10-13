package shared

type ScanOutput struct {
	ConsumedCapacity *ConsumedCapacity           `json:"ConsumedCapacity"`
	Count            *int64                      `json:"Count"`
	Items            []map[string]AttributeValue `json:"Items"`
	LastEvaluatedKey map[string]AttributeValue   `json:"LastEvaluatedKey"`
	ScannedCount     *int64                      `json:"ScannedCount"`
}
