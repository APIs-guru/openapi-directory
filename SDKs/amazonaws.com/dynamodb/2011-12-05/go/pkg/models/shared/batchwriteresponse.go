package shared

type BatchWriteResponse struct {
	ConsumedCapacityUnits *float64 `json:"ConsumedCapacityUnits,omitempty"`
}
